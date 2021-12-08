/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155, ERC1155Interface } from "../ERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200171a3803806200171a833981016040819052620000349162000105565b6200003f8162000046565b5062000227565b80516200005b9060029060208401906200005f565b5050565b8280546200006d90620001d4565b90600052602060002090601f016020900481019282620000915760008555620000dc565b82601f10620000ac57805160ff1916838001178555620000dc565b82800160010185558215620000dc579182015b82811115620000dc578251825591602001919060010190620000bf565b50620000ea929150620000ee565b5090565b5b80821115620000ea5760008155600101620000ef565b6000602080838503121562000118578182fd5b82516001600160401b03808211156200012f578384fd5b818501915085601f83011262000143578384fd5b81518181111562000158576200015862000211565b604051601f8201601f19168101850183811182821017156200017e576200017e62000211565b604052818152838201850188101562000195578586fd5b8592505b81831015620001b8578383018501518184018601529184019162000199565b81831115620001c957858583830101525b979650505050505050565b600281046001821680620001e957607f821691505b602082108114156200020b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6114e380620002376000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461015057610087565b8062fdd58e1461008c57806301ffc9a7146100b55780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610d3a565b610163565b6040516100ac91906112ea565b60405180910390f35b6100c86100c3366004610e21565b6101ba565b6040516100ac9190610fe1565b6100e86100e3366004610e60565b610202565b6040516100ac9190610fec565b610108610103366004610bf7565b610296565b005b61011d610118366004610d63565b6102f4565b6040516100ac9190610fa0565b610108610138366004610d00565b610414565b6100c861014b366004610bc5565b6104e2565b61010861015e366004610c9d565b610510565b60006001600160a01b0383166101945760405162461bcd60e51b815260040161018b9061109b565b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b14806101eb57506001600160e01b031982166303a24d0760e21b145b806101fa57506101fa82610567565b90505b919050565b60606002805461021190611367565b80601f016020809104026020016040519081016040528092919081815260200182805461023d90611367565b801561028a5780601f1061025f5761010080835404028352916020019161028a565b820191906000526020600020905b81548152906001019060200180831161026d57829003601f168201915b50505050509050919050565b61029e610580565b6001600160a01b0316856001600160a01b031614806102c457506102c48561014b610580565b6102e05760405162461bcd60e51b815260040161018b90611174565b6102ed8585858585610585565b5050505050565b606081518351146103175760405162461bcd60e51b815260040161018b90611259565b6000835167ffffffffffffffff81111561034157634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561036a578160200160208202803683370190505b50905060005b845181101561040c576103d185828151811061039c57634e487b7160e01b600052603260045260246000fd5b60200260200101518583815181106103c457634e487b7160e01b600052603260045260246000fd5b6020026020010151610163565b8282815181106103f157634e487b7160e01b600052603260045260246000fd5b6020908102919091010152610405816113a2565b9050610370565b509392505050565b816001600160a01b0316610426610580565b6001600160a01b0316141561044d5760405162461bcd60e51b815260040161018b90611210565b806001600061045a610580565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff19169215159290921790915561049e610580565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516104d69190610fe1565b60405180910390a35050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b610518610580565b6001600160a01b0316856001600160a01b0316148061053e575061053e8561014b610580565b61055a5760405162461bcd60e51b815260040161018b906110e6565b6102ed8585858585610756565b6001600160e01b031981166301ffc9a760e01b14919050565b335b90565b81518351146105a65760405162461bcd60e51b815260040161018b906112a2565b6001600160a01b0384166105cc5760405162461bcd60e51b815260040161018b9061112f565b60006105d6610580565b90506105e681878787878761074e565b60005b84518110156106e857600085828151811061061457634e487b7160e01b600052603260045260246000fd5b60200260200101519050600085838151811061064057634e487b7160e01b600052603260045260246000fd5b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156106905760405162461bcd60e51b815260040161018b906111c6565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906106cd90849061134f565b92505081905550505050806106e1906113a2565b90506105e9565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610738929190610fb3565b60405180910390a461074e818787878787610899565b505050505050565b6001600160a01b03841661077c5760405162461bcd60e51b815260040161018b9061112f565b6000610786610580565b90506107a6818787610797886109a7565b6107a0886109a7565b8761074e565b6000848152602081815260408083206001600160a01b038a168452909152902054838110156107e75760405162461bcd60e51b815260040161018b906111c6565b6000858152602081815260408083206001600160a01b038b811685529252808320878503905590881682528120805486929061082490849061134f565b92505081905550856001600160a01b0316876001600160a01b0316836001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62888860405161087a9291906112f3565b60405180910390a4610890828888888888610a00565b50505050505050565b6108ab846001600160a01b0316610ad1565b1561074e5760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906108e49089908990889088908890600401610efd565b602060405180830381600087803b1580156108fe57600080fd5b505af192505050801561092e575060408051601f3d908101601f1916820190925261092b91810190610e44565b60015b6109775761093a6113ef565b80610945575061095f565b8060405162461bcd60e51b815260040161018b9190610fec565b60405162461bcd60e51b815260040161018b90610fff565b6001600160e01b0319811663bc197c8160e01b146108905760405162461bcd60e51b815260040161018b90611053565b604080516001808252818301909252606091600091906020808301908036833701905050905082816000815181106109ef57634e487b7160e01b600052603260045260246000fd5b602090810291909101015292915050565b610a12846001600160a01b0316610ad1565b1561074e5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610a4b9089908990889088908890600401610f5b565b602060405180830381600087803b158015610a6557600080fd5b505af1925050508015610a95575060408051601f3d908101601f19168201909252610a9291810190610e44565b60015b610aa15761093a6113ef565b6001600160e01b0319811663f23a6e6160e01b146108905760405162461bcd60e51b815260040161018b90611053565b3b151590565b80356001600160a01b03811681146101fd57600080fd5b600082601f830112610afe578081fd5b81356020610b13610b0e8361132b565b611301565b8281528181019085830183850287018401881015610b2f578586fd5b855b85811015610b4d57813584529284019290840190600101610b31565b5090979650505050505050565b600082601f830112610b6a578081fd5b813567ffffffffffffffff811115610b8457610b846113d3565b610b97601f8201601f1916602001611301565b818152846020838601011115610bab578283fd5b816020850160208301379081016020019190915292915050565b60008060408385031215610bd7578182fd5b610be083610ad7565b9150610bee60208401610ad7565b90509250929050565b600080600080600060a08688031215610c0e578081fd5b610c1786610ad7565b9450610c2560208701610ad7565b9350604086013567ffffffffffffffff80821115610c41578283fd5b610c4d89838a01610aee565b94506060880135915080821115610c62578283fd5b610c6e89838a01610aee565b93506080880135915080821115610c83578283fd5b50610c9088828901610b5a565b9150509295509295909350565b600080600080600060a08688031215610cb4578081fd5b610cbd86610ad7565b9450610ccb60208701610ad7565b93506040860135925060608601359150608086013567ffffffffffffffff811115610cf4578182fd5b610c9088828901610b5a565b60008060408385031215610d12578182fd5b610d1b83610ad7565b915060208301358015158114610d2f578182fd5b809150509250929050565b60008060408385031215610d4c578182fd5b610d5583610ad7565b946020939093013593505050565b60008060408385031215610d75578182fd5b823567ffffffffffffffff80821115610d8c578384fd5b818501915085601f830112610d9f578384fd5b81356020610daf610b0e8361132b565b82815281810190858301838502870184018b1015610dcb578889fd5b8896505b84871015610df457610de081610ad7565b835260019690960195918301918301610dcf565b5096505086013592505080821115610e0a578283fd5b50610e1785828601610aee565b9150509250929050565b600060208284031215610e32578081fd5b8135610e3d81611494565b9392505050565b600060208284031215610e55578081fd5b8151610e3d81611494565b600060208284031215610e71578081fd5b5035919050565b6000815180845260208085019450808401835b83811015610ea757815187529582019590820190600101610e8b565b509495945050505050565b60008151808452815b81811015610ed757602081850181015186830182015201610ebb565b81811115610ee85782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0386811682528516602082015260a060408201819052600090610f2990830186610e78565b8281036060840152610f3b8186610e78565b90508281036080840152610f4f8185610eb2565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090610f9590830184610eb2565b979650505050505050565b600060208252610e3d6020830184610e78565b600060408252610fc66040830185610e78565b8281036020840152610fd88185610e78565b95945050505050565b901515815260200190565b600060208252610e3d6020830184610eb2565b60208082526034908201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356040820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b606082015260800190565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6020808252602b908201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60408201526a65726f206164647265737360a81b606082015260800190565b60208082526029908201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260408201526808185c1c1c9bdd995960ba1b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526032908201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206040820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b60208082526029908201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604082015268103337b91039b2b63360b91b606082015260800190565b60208082526029908201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604082015268040dad2e6dac2e8c6d60bb1b606082015260800190565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206040820152670dad2e6dac2e8c6d60c31b606082015260800190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff81118282101715611323576113236113d3565b604052919050565b600067ffffffffffffffff821115611345576113456113d3565b5060209081020190565b60008219821115611362576113626113bd565b500190565b60028104600182168061137b57607f821691505b6020821081141561139c57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156113b6576113b66113bd565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60e01c90565b600060443d10156113ff57610582565b600481823e6308c379a061141382516113e9565b1461141d57610582565b6040513d600319016004823e80513d67ffffffffffffffff816024840111818411171561144d5750505050610582565b828401925082519150808211156114675750505050610582565b503d8301602082840101111561147f57505050610582565b601f01601f1916810160200160405291505090565b6001600160e01b0319811681146114aa57600080fd5b5056fea2646970667358221220034331b49195209a4ef15a901cec90cf30222e3f6f2a3db314135cc9d98e90a364736f6c63430008000033";

type ERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155__factory extends ContractFactory {
  constructor(...args: ERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  getDeployTransaction(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}
