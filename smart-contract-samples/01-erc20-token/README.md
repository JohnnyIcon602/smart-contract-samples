# SampleToken - ERC-20 Token Contract

## Overview

This is a simple ERC-20 fungible token contract written in Solidity. It's designed for learning purposes and as a starting point for building more complex DeFi applications.

## Token Details

| Property | Value |
|----------|-------|
| Name | Sample Token |
| Symbol | SAMPLE |
| Decimals | 18 |
| Total Supply | 1,000,000 SAMPLE |

## Features

- **Transfer**: Send tokens to any address
- **Approve & Allowance**: Allow other addresses to spend your tokens
- **TransferFrom**: Spend tokens on behalf of others (requires prior approval)

## Contract Functions

### Read-Only Functions

- `balanceOf(address _owner)` - Get the token balance of an address
- `allowance(address _owner, address _spender)` - Check how much a spender can use

### Write Functions

- `transfer(address _to, uint256 _amount)` - Transfer tokens to another address
- `approve(address _spender, uint256 _amount)` - Allow an address to spend your tokens
- `transferFrom(address _from, address _to, uint256 _amount)` - Transfer on behalf of someone

## Deployment Instructions

### Option 1: Using Remix IDE (Recommended for Beginners)

1. Go to [Remix IDE](https://remix.ethereum.org)
2. Create a new file named `SampleToken.sol`
3. Paste the contract code
4. Compile the contract (Solidity version 0.8.20)
5. Go to "Deploy" tab
6. Select "Injected Provider - MetaMask" (or any other environment)
7. Click "Deploy"
8. Confirm the transaction in MetaMask

### Option 2: Using Hardhat (For Development)

```bash
# 1. Initialize a new project
mkdir my-token-project
cd my-token-project
npm init -y

# 2. Install Hardhat
npm install --save-dev hardhat

# 3. Create Hardhat config
npx hardhat init

# 4. Create the contract in contracts/ folder
# Copy SampleToken.sol to contracts/

# 5. Create a deployment script (scripts/deploy.js)
const hre = require("hardhat");

async function main() {
    const SampleToken = await hre.ethers.getContractFactory("SampleToken");
    const token = await SampleToken.deploy();
    await token.deployed();
    console.log("Token deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

# 6. Deploy to local network
npx hardhat run scripts/deploy.js --network localhost

# 7. Deploy to testnet (Sepolia)
npx hardhat run scripts/deploy.js --network sepolia
```

### Option 3: Using Foundry

```bash
# 1. Install Foundry
curl -L https://foundry.paradigm.xyz | bash
foundryup

# 2. Initialize project
forge init my-token-project
cd my-token-project

# 3. Create contract
mkdir contracts
# Copy SampleToken.sol to contracts/

# 4. Build
forge build

# 5. Deploy to Anvil (local)
forge create --rpc-url http://localhost:8545 SampleToken

# 6. Deploy to Sepolia
forge create --rpc-url https://sepolia.infura.io/v3/YOUR_API_KEY --private-key YOUR_PRIVATE_KEY SampleToken
```

## Interacting with the Contract

### Using Ethers.js (JavaScript)

```javascript
const { ethers } = require("ethers");

// Connect to a provider (e.g., Infura, Alchemy, or MetaMask)
const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/YOUR_API_KEY");

// Create contract instance
const tokenAddress = "YOUR_TOKEN_ADDRESS";
const abi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function decimals() view returns (uint8)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint256)",
    "function transfer(address to, uint256 amount) returns (bool)",
    "function approve(address spender, uint256 amount) returns (bool)",
    "function transferFrom(address from, address to, uint256 amount) returns (bool)"
];

const token = new ethers.Contract(tokenAddress, abi, provider);

// Read data
const name = await token.name();
const symbol = await token.symbol();
const balance = await token.balanceOf("WALLET_ADDRESS");

// Send transaction (requires signer)
const signer = await provider.getSigner();
const tokenWithSigner = token.connect(signer);
await tokenWithSigner.transfer("RECIPIENT_ADDRESS", ethers.parseEther("100"));
```

### Using cast (Foundry)

```bash
# Get token name
cast call TOKEN_ADDRESS "name()" --rpc-url https://sepolia.infura.io/v3/YOUR_API_KEY

# Get balance
cast call TOKEN_ADDRESS "balanceOf(WALLET_ADDRESS)" --rpc-url https://sepolia.infura.io/v3/YOUR_API_KEY

# Transfer tokens
cast send TOKEN_ADDRESS "transfer(address,uint256)" RECIPIENT_ADDRESS AMOUNT --rpc-url https://sepolia.infura.io/v3/YOUR_API_KEY --private-key YOUR_PRIVATE_KEY
```

## Important Notes

1. **Always test on a testnet first** (Sepolia, Goerli, or Holesky)
2. **Keep your private keys secure** - Never commit them to version control
3. **Verify your contract** on Etherscan for transparency
4. **Set appropriate gas limits** for transactions

## Security Considerations

- This is a basic implementation for learning purposes
- For production use, consider using OpenZeppelin's battle-tested ERC-20 implementation
- Add reentrancy guards and access control for advanced features
- Consider pausable functionality for emergency situations

## License

MIT License
