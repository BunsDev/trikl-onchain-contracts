# Trikl - Version 1.0

[DeFi communities powered by membership](https://trikl.xyz/)

## 💬 **About the project**

Trikl is like on-chain Patreon and growing continuously to become more. We solve the above-mentioned issues with a transparent, on-chain, secure platform that helps influencers create a strong monetizable community, curates the best recommendations, and allows users to be a part of exclusive communities.

> **Backend Repo**, This repo includes the all the Smart Contract files all together. It has a project structure facilitating a fast/clean depolying the smart contract on the blockchain.

## ⚔️ **Smart Contract**
* [Mumbai](https://mumbai.polygonscan.com/address/0xBF860374D8F921f9d651F4A3f2e88958D10521A1)

## Toolchain:
- Solidity
- Hardhat
- Polygon Mumbai Testnet
- Alchemy 
- Polygonscan 

## 🚀 **Onboarding**

```shell
git clone https://github.com/TriklHQ/Trikl_V2-onchain.git
```

Login to [Alchemy](https://www.alchemy.com/) & [Polygonscan](https://polygonscan.com/), get the required API's and add them in your env files. On success, you can the run the below commands to deploy your smart-contract 

```shell
npx hardhat run --network rinkeby scripts/deploy.js
npx hardhat verify --network rinkeby <deployed contract address>
```


