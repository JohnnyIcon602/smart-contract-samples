// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title SampleToken
 * @dev A simple ERC-20 token contract for learning and demonstration purposes.
 * 
 * This is a basic implementation of the ERC-20 standard token.
 * It includes:
 * - Token name: "Sample Token"
 * - Symbol: "SAMPLE"
 * - Decimals: 18
 * - Total supply: 1,000,000 tokens
 * 
 * Features:
 * - Transfer tokens between accounts
 * - Approve tokens for spending by other addresses
 * - Transfer tokens on behalf of another address (allowance)
 * 
 * This contract is intended for educational purposes and as a starting point
 * for building more complex DeFi applications.
 */
contract SampleToken {
    // Token metadata
    string public constant name = "Sample Token";
    string public constant symbol = "SAMPLE";
    uint8 public constant decimals = 18;
    
    // Total supply of tokens (1,000,000 * 10^18 for decimals)
    uint256 public constant totalSupply = 1000000 * 10**uint256(decimals);
    
    // Mapping to track token balances for each address
    mapping(address => uint256) private balances;
    
    // Mapping to track allowances (owner => spender => amount)
    mapping(address => mapping(address => uint256)) private allowances;
    
    // Event: Emitted when tokens are transferred
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    // Event: Emitted when an allowance is set
    event Approval(address indexed owner, address indexed spender, uint256 value);
    
    // Event: Emitted when tokens are minted (initial deployment)
    event Mint(address indexed to, uint256 value);

    /**
     * @dev Constructor that gives the deployer all initial tokens.
     */
    constructor() {
        // Mint all tokens to the contract deployer
        balances[msg.sender] = totalSupply;
        emit Mint(msg.sender, totalSupply);
    }

    /**
     * @dev Returns the balance of a specific address.
     * @param _owner The address to query the balance of.
     * @return The balance of the specified address.
     */
    function balanceOf(address _owner) public view returns (uint256) {
        return balances[_owner];
    }

    /**
     * @dev Transfers tokens from the sender's account to a recipient.
     * @param _to The address to transfer tokens to.
     * @param _amount The amount of tokens to transfer.
     * @return True if the transfer was successful.
     */
    function transfer(address _to, uint256 _amount) public returns (bool) {
        require(_to != address(0), "Transfer to zero address not allowed");
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        
        // Deduct from sender's balance
        balances[msg.sender] -= _amount;
        // Add to recipient's balance
        balances[_to] += _amount;
        
        emit Transfer(msg.sender, _to, _amount);
        return true;
    }

    /**
     * @dev Returns the amount of tokens that a spender is allowed to spend
     *      on behalf of an owner.
     * @param _owner The address that owns the tokens.
     * @param _spender The address that will spend the tokens.
     * @return The amount of tokens the spender can spend.
     */
    function allowance(address _owner, address _spender) public view returns (uint256) {
        return allowances[_owner][_spender];
    }

    /**
     * @dev Approves a spender to spend a certain amount of tokens on behalf
     *      of the sender.
     * @param _spender The address that will spend the tokens.
     * @param _amount The amount of tokens the spender can spend.
     * @return True if the approval was successful.
     */
    function approve(address _spender, uint256 _amount) public returns (bool) {
        require(_spender != address(0), "Approve to zero address not allowed");
        
        allowances[msg.sender][_spender] = _amount;
        emit Approval(msg.sender, _spender, _amount);
        return true;
    }

    /**
     * @dev Transfers tokens from one address to another using the allowance mechanism.
     *      The caller must have an allowance from the sender greater than or equal to
     *      the amount being transferred.
     * @param _from The address to transfer tokens from.
     * @param _to The address to transfer tokens to.
     * @param _amount The amount of tokens to transfer.
     * @return True if the transfer was successful.
     */
    function transferFrom(address _from, address _to, uint256 _amount) public returns (bool) {
        require(_to != address(0), "Transfer to zero address not allowed");
        require(balances[_from] >= _amount, "Insufficient balance");
        require(allowances[_from][msg.sender] >= _amount, "Allowance exceeded");
        
        // Deduct from sender's balance
        balances[_from] -= _amount;
        // Add to recipient's balance
        balances[_to] += _amount;
        
        // Deduct from allowance
        allowances[_from][msg.sender] -= _amount;
        
        emit Transfer(_from, _to, _amount);
        return true;
    }

    /**
     * @dev Internal function that mints new tokens (used in constructor).
     * @param _to The address that will receive the minted tokens.
     * @param _amount The amount of tokens to mint.
     */
    function _mint(address _to, uint256 _amount) internal {
        require(_to != address(0), "Mint to zero address not allowed");
        balances[_to] += _amount;
        emit Transfer(address(0), _to, _amount);
    }
}
