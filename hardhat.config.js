require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

private_keys = process.env.PRIVATE_KEYS;

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    rinkeby: {
      url: process.env.RINKEBY_ALCHEMY_KEY,
      accounts: [private_keys],
    },
    mumbai: {
      url: process.env.MUMBAI_ALCHEMY_KEY,
      accounts: [private_keys],
    },
  },
  etherscan: {
    //apiKey: process.env.ETHERSCAN_API_KEY,
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
  // polygonscan: {
  //   apiKey: process.env.POLYGONSCAN_API_KEY,
  // },
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

//npx hardhat run --network mumbai scripts/deploy.js
//npx hardhat verify --network mumbai <contract address>
