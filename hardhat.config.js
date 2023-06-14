require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

const PRIVATE_KEY = "37b101a3c67aaf0dbcf6f73d2722466222cc909dad639c43edbc78d49223376a";

 
  module.exports = {
    solidity: {
      version: "0.8.10",
      settings: {
        optimizer: { 
          enabled: true,
          runs: 200,
        },
      },

    },
    
    networks: {
      goerli: {
        url: "https://eth-goerli.g.alchemy.com/v2/zUzhSks1AbcQy4NOUOvi1mCeZfvws1p3",
        chainId: 5,
        accounts: [PRIVATE_KEY],
      }
    },

    etherscan: {
      apiKey: {
        goerli  : "B7SSZBHZ4H2XY4U51HMAI95N9KDHN26ED1"
      }
    }
  };