// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/utils/Context.sol";

abstract contract MembershipAccess is Context {
    modifier onlyTokenHolders(uint256 id) {
        require(
            IERC1155(address(this)).balanceOf(msg.sender, id) != 0,
            "Only token holders can perform this action"
        );
        _;
    }

    modifier onlyOneNFTperAddress(uint256 id) {
        address thisAddress = msg.sender;
        require(
            IERC1155(address(this)).balanceOf(msg.sender, id) < 2,
            "Members can only hold one membership token"
        );
        _;
    }
}
