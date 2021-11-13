const RewardToken = artifacts.require("RewardToken");
const StakingPool = artifacts.require("StakingPool");
const initialSupply = 200000;
const dev = '0x6c6E19cBA08C0d668aC325dac7783dE15947dD63';
const rwdPerBlock = 2;
const startBlock = 1;
const bonusEndBlock = 502;
module.exports = async function (deployer) {
  await deployer.deploy(RewardToken, initialSupply);
  const reward = await RewardToken.deployed();
  const rwd = reward.address;
  await deployer.deploy(StakingPool, rwd, dev, rwdPerBlock, startBlock, bonusEndBlock);
  const stakingPool = await StakingPool.deployed();
  console.log("Deployed Reward Token (RWD) at:", rwd);
  console.log("Deployed Staking Poll at:", stakingPool.address);
};
