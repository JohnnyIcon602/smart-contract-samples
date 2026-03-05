// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title SimpleStaking
 * @dev A staking contract that rewards users for staking ERC20 tokens
 */
contract SimpleStaking is ReentrancyGuard, Ownable {
    // Staking token (the token users stake)
    IERC20 public stakingToken;
    
    // Reward token (the token users earn)
    IERC20 public rewardToken;
    
    // Reward rate per second (wei per token staked)
    uint256 public rewardRate;
    
    // Duration of rewards to be paid out (in seconds)
    uint256 public duration;
    
    // Timestamp of when the rewards finish
    uint256 public finishAt;
    
    // Minimum of last updated time and reward finish time
    uint256 public updatedAt;
    
    // Reward to be paid out per second
    uint256 public rewardPerTokenStored;
    
    // User address => rewardPerTokenPaid
    mapping(address => uint256) public userRewardPerTokenPaid;
    
    // User address => rewards to be claimed
    mapping(address => uint256) public rewards;
    
    // Total staked
    uint256 public totalSupply;
    
    // User address => staked amount
    mapping(address => uint256) public balanceOf;
    
    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 reward);
    
    constructor(address _stakingToken, address _rewardToken) {
        stakingToken = IERC20(_stakingToken);
        rewardToken = IERC20(_rewardToken);
    }
    
    modifier updateReward(address _account) {
        rewardPerTokenStored = rewardPerToken();
        updatedAt = lastTimeRewardApplicable();
        
        if (_account != address(0)) {
            rewards[_account] = earned(_account);
            userRewardPerTokenPaid[_account] = rewardPerTokenStored;
        }
        _;
    }
    
    function lastTimeRewardApplicable() public view returns (uint256) {
        return _min(finishAt, block.timestamp);
    }
    
    function rewardPerToken() public view returns (uint256) {
        if (totalSupply == 0) {
            return rewardPerTokenStored;
        }
        return rewardPerTokenStored + (lastTimeRewardApplicable() - updatedAt) * rewardRate * 1e18 / totalSupply;
    }
    
    function earned(address _account) public view returns (uint256) {
        return (balanceOf[_account] * (rewardPerToken() - userRewardPerTokenPaid[_account]) / 1e18) + rewards[_account];
    }
    
    function stake(uint256 _amount) external nonReentrant updateReward(msg.sender) {
        require(_amount > 0, "Amount > 0");
        stakingToken.transferFrom(msg.sender, address(this), _amount);
        balanceOf[msg.sender] += _amount;
        totalSupply += _amount;
        emit Staked(msg.sender, _amount);
    }
    
    function withdraw(uint256 _amount) external nonReentrant updateReward(msg.sender) {
        require(_amount > 0, "Amount > 0");
        require(balanceOf[msg.sender] >= _amount, "Insufficient balance");
        balanceOf[msg.sender] -= _amount;
        totalSupply -= _amount;
        stakingToken.transfer(msg.sender, _amount);
        emit Withdrawn(msg.sender, _amount);
    }
    
    function getReward() external nonReentrant updateReward(msg.sender) {
        uint256 reward = rewards[msg.sender];
        if (reward > 0) {
            rewards[msg.sender] = 0;
            rewardToken.transfer(msg.sender, reward);
            emit RewardClaimed(msg.sender, reward);
        }
    }
    
    function setRewardsDuration(uint256 _duration) external onlyOwner {
        require(finishAt < block.timestamp, "Reward duration not finished");
        duration = _duration;
    }
    
    function notifyRewardAmount(uint256 _amount) external onlyOwner updateReward(address(0)) {
        if (block.timestamp >= finishAt) {
            rewardRate = _amount / duration;
        } else {
            uint256 remainingRewards = (finishAt - block.timestamp) * rewardRate;
            rewardRate = (_amount + remainingRewards) / duration;
        }
        require(rewardRate > 0, "Reward rate = 0");
        require(rewardRate * duration <= rewardToken.balanceOf(address(this)), "Reward amount > balance");
        
        finishAt = block.timestamp + duration;
        updatedAt = block.timestamp;
    }
    
    function _min(uint256 x, uint256 y) private pure returns (uint256) {
        return x <= y ? x : y;
    }
}
