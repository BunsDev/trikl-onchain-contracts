require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

private_keys = process.env.PRIVATE_KEYS;

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    rinkeby: {
      url: process.env.ALCHEMY_KEY,
      accounts: [private_keys],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    version: "0.8.14",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

//npx hardhat run --network rinkeby scripts/deploy.js
//npx hardhat verify --network rinkeby <contract address>
