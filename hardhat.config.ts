import "@nomicfoundation/hardhat-toolbox";
import "solidity-coverage";

require('dotenv').config()

const ALCHEMY_API_KEY =  process.env["ALCHEMY_API_KEY"];
const GOERLI_PRIVATE_KEY =  process.env["GOERLI_PRIVATE_KEY"];
const ETHERSCAN_KEY = process.env["ETHERSCAN_KEY"]

const config: any = {
  solidity: "0.8.9", 
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
  
};

export default config;