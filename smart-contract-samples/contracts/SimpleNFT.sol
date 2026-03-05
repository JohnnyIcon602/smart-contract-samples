// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title SimpleNFT
 * @dev A basic ERC-721 NFT collection contract
 */
contract SimpleNFT is ERC721, ERC721URIStorage, Ownable {
    uint256 private _tokenIds;
    uint256 public maxSupply = 10000;
    
    constructor() ERC721("SimpleNFT", "SNFT") Ownable(msg.sender) {}
    
    function mintNFT(address _to, string memory _tokenURI) public onlyOwner returns (uint256) {
        require(_tokenIds < maxSupply, "Max supply reached");
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        _mint(_to, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);
        return newTokenId;
    }
    
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
    
    function getTotalMinted() public view returns (uint256) {
        return _tokenIds;
    }
}
