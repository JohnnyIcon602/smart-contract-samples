# Smart Contract Samples

A collection of production-ready Solidity smart contracts for Ethereum and EVM-compatible blockchains.

## Contracts Included

### 1. SimpleToken.sol
A basic ERC-20 token implementation.
- **Use case:** Token creation, ICOs, governance tokens
- **Features:** Transfer, approve, transferFrom, allowance
- **License:** MIT

### 2. SimpleNFT.sol
An ERC-721 NFT collection contract with OpenZeppelin.
- **Use case:** NFT collections, digital art, gaming assets
- **Features:** Minting, URI storage, ownership
- **License:** MIT

### 3. SimpleStorage.sol
A beginner-friendly storage contract.
- **Use case:** Learning Solidity basics
- **Features:** Set and get functions, events
- **License:** MIT

### 4. TokenSale.sol
A basic token sale/ICO contract.
- **Use case:** Token sales, crowdfunding
- **Features:** ETH to token exchange, owner withdrawal
- **License:** MIT

## Requirements

- Node.js >= 18.0
- Hardhat or Truffle
- OpenZeppelin Contracts

## Quick Start

```bash
# Install dependencies
npm install

# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test
```

## Deployment

### Local
```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

### Testnet
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## Security

These contracts are for educational purposes. Always audit before production use.

## License

MIT
