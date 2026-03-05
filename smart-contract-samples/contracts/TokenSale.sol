// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title TokenSale
 * @dev A basic token sale/ICO contract
 */
contract TokenSale {
    IERC20 public token;
    uint256 public rate; // tokens per ETH
    address public owner;
    
    event TokensPurchased(address buyer, uint256 amountETH, uint256 amountTokens);
    
    constructor(IERC20 _token, uint256 _rate) {
        token = _token;
        rate = _rate;
        owner = msg.sender;
    }
    
    function buyTokens() public payable {
        require(msg.value > 0, "Send ETH to buy tokens");
        uint256 tokenAmount = msg.value * rate;
        require(token.balanceOf(address(this)) >= tokenAmount, "Not enough tokens available");
        
        token.transfer(msg.sender, tokenAmount);
        emit TokensPurchased(msg.sender, msg.value, tokenAmount);
    }
    
    function withdrawETH() public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
    
    receive() external payable {
        buyTokens();
    }
}
