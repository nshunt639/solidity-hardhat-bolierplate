import {isValidEnv} from './env-validator';
import hre from 'hardhat';
import fs from 'fs';

export async function verifyContracts(env: string): Promise<void> {
  const contracts = JSON.parse(
    fs.readFileSync(`./scripts/contracts-${env}.json`, 'utf-8')
  );

  if (contracts.network != hre.network.name) {
    throw new Error(
      'Contracts are not deployed on the same network, that you are trying to verify!'
    );
  }

  if (!isValidEnv(env.toLowerCase())) {
    throw new Error(`Env: ${env} is not recognized!`);
  }

  //verify TokenRegistry
  try {
    await hre.run('verify:verify', {
      address: contracts.tokenRegistry,
    });
  } catch (error) {
    logError('Token Registry', error.message);
  }

  //verify VoucherSets
  try {
    await hre.run('verify:verify', {
      address: contracts.voucherSets,
      constructorArguments: [
        process.env.VOUCHERSETS_METADATA_URI,
        contracts.cashier,
        contracts.voucherKernel,
      ],
    });
  } catch (error) {
    logError('VoucherSets', error.message);
  }

  //verify Vouchers
  try {
    await hre.run('verify:verify', {
      address: contracts.vouchers,
      constructorArguments: [
        process.env.VOUCHERS_METADATA_URI,
        'Boson Smart Voucher',
        'BSV',
        contracts.cashier,
        contracts.voucherKernel,
      ],
    });
  } catch (error) {
    logError('Vouchers', error.message);
  }

  //verify VoucherKernel
  try {
    await hre.run('verify:verify', {
      address: contracts.voucherKernel,
      constructorArguments: [
        contracts.br,
        contracts.cashier,
        contracts.voucherSets,
        contracts.vouchers,
      ],
    });
  } catch (error) {
    logError('VoucherKernel', error.message);
  }

  //verify Cashier
  try {
    await hre.run('verify:verify', {
      address: contracts.cashier,
      constructorArguments: [
        contracts.br,
        contracts.voucherKernel,
        contracts.voucherSets,
        contracts.vouchers,
      ],
    });
  } catch (error) {
    logError('Cashier', error.message);
  }

  //verify BosonRouter
  try {
    await hre.run('verify:verify', {
      address: contracts.br,
      constructorArguments: [
        contracts.voucherKernel,
        contracts.tokenRegistry,
        contracts.cashier,
      ],
    });
  } catch (error) {
    logError('BosonRouter', error.message);
  }

  //verify Gate
  try {
    await hre.run('verify:verify', {
      address: contracts.gate,
      constructorArguments: [contracts.br, contracts.erc1155NonTransferable],
    });
  } catch (error) {
    logError('Gate', error.message);
  }

  //verify ERC1155NonTransferable
  try {
    await hre.run('verify:verify', {
      address: contracts.erc1155NonTransferable,
      constructorArguments: [process.env.CONDITIONAL_COMMIT_TOKEN_METADATA_URI],
    });
  } catch (error) {
    logError('ERC1155NonTransferable', error.message);
  }

  //DAITokenWrapper
  try {
    await hre.run('verify:verify', {
      address: contracts.daiTokenWrapper,
      constructorArguments: [contracts.daiTokenUsed],
    });
  } catch (error) {
    logError('DAITokenWrapper', error.message);
  }
}

function logError(contractName, msg) {
  console.log(
    `\x1b[31mError while trying to verify contract: ${contractName}!`
  );
  console.log(`Error message: ${msg}`);
  resetConsoleColor();
}

function resetConsoleColor() {
  console.log('\x1b[0m');
}