// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Snapshot.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title ZionToken is the ERC20 of the ZION® Protocol. The initial landing page for the protocol will be on
 * nzft.tech .
 *
 * @dev This is a simple ERC20 mintable, pausable and snapshot token, based on Open Zeppelin contracts.
 * NOTE We will deploy vesting wallets. Token supply will be managed by the DAO via a Minion, which will be set owner of the contract
 */

contract ZION is ERC20, Ownable, Pausable, ERC20Snapshot {
    constructor() ERC20("ZION - Power to Creators", "ZION") {}

    /// @dev Snapshot calling function
    function snapshot() public onlyOwner {
        _snapshot();
    }

    /// @dev Pause calling function
    function pause() public onlyOwner {
        _pause();
    }

    /// @dev Unpause calling function
    function unpause() public onlyOwner {
        _unpause();
    }

    /// @dev Mint calling function
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override(ERC20, ERC20Snapshot)
    {
        super._beforeTokenTransfer(from, to, amount);
    }

}
