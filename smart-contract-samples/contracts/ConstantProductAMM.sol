// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title ConstantProductAMM
 * @dev A simplified AMM (Automated Market Maker) similar to Uniswap V2
 * Allows swapping between any two ERC20 tokens using the constant product formula: x * y = k
 */
contract ConstantProductAMM is Ownable {
    using SafeERC20 for IERC20;

    // Factory address (could be used for pair management in a full implementation)
    address public factory;

    // Mapping from token address to pool info
    mapping(address => mapping(address => PoolInfo)) public pools;

    struct PoolInfo {
        uint256 reserveA;
        uint256 reserveB;
        uint256 totalSupply;  // LP token supply
        uint256 lastUpdateTime;
    }

    // LP Token for each pair
    mapping(address => mapping(address => address)) public lpTokens;

    // Events
    event AddLiquidity(address indexed provider, address tokenA, address tokenB, uint256 amountA, uint256 amountB);
    event RemoveLiquidity(address indexed provider, address tokenA, address tokenB, uint256 amountA, uint256 amountB);
    event Swap(address indexed user, address tokenIn, address tokenOut, uint256 amountIn, uint256 amountOut);

    constructor() {
        factory = msg.sender;
    }

    /**
     * @dev Add liquidity to the pool
     * @param tokenA Address of first token
     * @param tokenB Address of second token
     * @param amountADesired Desired amount of tokenA to add
     * @param amountBDesired Desired amount of tokenB to add
     * @param amountAMin Minimum amount of tokenA to add (slippage protection)
     * @param amountBMin Minimum amount of tokenB to add (slippage protection)
     * @return amountA Actual amount of tokenA added
     * @return amountB Actual amount of tokenB added
     * @return liquidity LP tokens minted
     */
    function addLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountADesired,
        uint256 amountBDesired,
        uint256 amountAMin,
        uint256 amountBMin
    ) external returns (uint256 amountA, uint256 amountB, uint256 liquidity) {
        require(tokenA != tokenB, "Identical addresses");
        require(tokenA != address(0) && tokenB != address(0), "Zero address");

        PoolInfo storage pool = pools[tokenA][tokenB];
        
        // If pool doesn't exist, create it
        if (pool.totalSupply == 0) {
            amountA = amountADesired;
            amountB = amountBDesired;
            pool.reserveA = amountA;
            pool.reserveB = amountB;
            pool.totalSupply = _sqrt(amountA * amountB);
            pool.lastUpdateTime = block.timestamp;
            
            // Mint initial LP tokens to the provider
            liquidity = pool.totalSupply;
        } else {
            // Calculate optimal amounts based on current reserves
            uint256 amountBOptimal = _quoteAmountA(amountADesired, pool.reserveA, pool.reserveB);
            
            if (amountBOptimal <= amountBDesired) {
                require(amountBOptimal >= amountBMin, "Insufficient B amount");
                amountA = amountADesired;
                amountB = amountBOptimal;
            } else {
                uint256 amountAOptimal = _quoteAmountA(amountBDesired, pool.reserveB, pool.reserveA);
                assert(amountAOptimal <= amountADesired);
                require(amountAOptimal >= amountAMin, "Insufficient A amount");
                
                amountA = amountAOptimal;
                amountB = amountBDesired;
            }

            // Update reserves
            pool.reserveA += amountA;
            pool.reserveB += amountB;
            pool.lastUpdateTime = block.timestamp;

            // Mint LP tokens proportional to contribution
            liquidity = (amountA * pool.totalSupply) / pool.reserveA;
        }

        // Transfer tokens from sender
        IERC20(tokenA).safeTransferFrom(msg.sender, address(this), amountA);
        IERC20(tokenB).safeTransferFrom(msg.sender, address(this), amountB);

        emit AddLiquidity(msg.sender, tokenA, tokenB, amountA, amountB);
    }

    /**
     * @dev Remove liquidity from the pool
     * @param tokenA Address of first token
     * @param tokenB Address of second token
     * @param liquidity Amount of LP tokens to burn
     * @param amountAMin Minimum amount of tokenA to receive
     * @param amountBMin Minimum amount of tokenB to receive
     * @return amountA Amount of tokenA received
     * @return amountB Amount of tokenB received
     */
    function removeLiquidity(
        address tokenA,
        address tokenB,
        uint256 liquidity,
        uint256 amountAMin,
        uint256 amountBMin
    ) external returns (uint256 amountA, uint256 amountB) {
        require(tokenA != tokenB, "Identical addresses");
        
        PoolInfo storage pool = pools[tokenA][tokenB];
        require(pool.totalSupply > 0, "Pool not exists");

        // Calculate amounts to receive
        amountA = (liquidity * pool.reserveA) / pool.totalSupply;
        amountB = (liquidity * pool.reserveB) / pool.totalSupply;

        require(amountA >= amountAMin, "Insufficient A output");
        require(amountB >= amountBMin, "Insufficient B output");

        // Burn LP tokens and transfer tokens
        pool.reserveA -= amountA;
        pool.reserveB -= amountB;
        pool.totalSupply -= liquidity;
        pool.lastUpdateTime = block.timestamp;

        IERC20(tokenA).safeTransfer(msg.sender, amountA);
        IERC20(tokenB).safeTransfer(msg.sender, amountB);

        emit RemoveLiquidity(msg.sender, tokenA, tokenB, amountA, amountB);
    }

    /**
     * @dev Swap tokens
     * @param amountIn Amount of input tokens
     * @param tokenIn Address of input token
     * @param tokenOut Address of output token
     * @param amountOutMin Minimum output amount (slippage protection)
     * @return amountOut Actual output amount
     */
    function swap(
        uint256 amountIn,
        address tokenIn,
        address tokenOut,
        uint256 amountOutMin
    ) external returns (uint256 amountOut) {
        require(amountIn > 0, "Invalid input amount");
        require(tokenIn != tokenOut, "Same token");
        require(tokenIn != address(0) && tokenOut != address(0), "Zero address");

        PoolInfo storage pool = pools[tokenIn][tokenOut];
        require(pool.reserveA > 0 && pool.reserveB > 0, "Pool not exists");

        // Calculate output using constant product formula
        // (x + dx) * (y - dy) = x * y
        // dy = y * dx / (x + dx)
        amountOut = (pool.reserveB * amountIn) / (pool.reserveA + amountIn);
        
        require(amountOut >= amountOutMin, "Insufficient output");

        // Update reserves
        pool.reserveA += amountIn;
        pool.reserveB -= amountOut;
        pool.lastUpdateTime = block.timestamp;

        // Transfer tokens
        IERC20(tokenIn).safeTransferFrom(msg.sender, address(this), amountIn);
        IERC20(tokenOut).safeTransfer(msg.sender, amountOut);

        emit Swap(msg.sender, tokenIn, tokenOut, amountIn, amountOut);
    }

    /**
     * @dev Get current price of tokenA in terms of tokenB
     * @param tokenA Address of tokenA
     * @param tokenB Address of tokenB
     * @return price Price of tokenA in tokenB (with 18 decimals)
     */
    function getPrice(address tokenA, address tokenB) external view returns (uint256) {
        PoolInfo storage pool = pools[tokenA][tokenB];
        require(pool.reserveA > 0, "Pool not exists");
        return (pool.reserveB * 1e18) / pool.reserveA;
    }

    /**
     * @dev Get swap output amount without executing
     * @param amountIn Input amount
     * @param tokenIn Input token
     * @param tokenOut Output token
     * @return amountOut Expected output amount
     */
    function getAmountOut(uint256 amountIn, address tokenIn, address tokenOut) external view returns (uint256 amountOut) {
        PoolInfo storage pool = pools[tokenIn][tokenOut];
        require(pool.reserveA > 0 && pool.reserveB > 0, "Pool not exists");
        amountOut = (pool.reserveB * amountIn) / (pool.reserveA + amountIn);
    }

    /**
     * @dev Quote amount of tokenB for given amount of tokenA
     * @param amountA Amount of tokenA
     * @param reserveA Reserve of tokenA
     * @param reserveB Reserve of tokenB
     * @return amountB Quoted amount of tokenB
     */
    function _quoteAmountA(uint256 amountA, uint256 reserveA, uint256 reserveB) internal pure returns (uint256 amountB) {
        require(amountA > 0, "Invalid amount");
        require(reserveA > 0 && reserveB > 0, "Insufficient liquidity");
        amountB = (amountA * reserveB) / reserveA;
    }

    /**
     * @dev Square root function
     * @param y Input number
     * @return z Square root
     */
    function _sqrt(uint256 y) internal pure returns (uint256 z) {
        if (y > 3) {
            z = y;
            uint256 x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
    }
}
