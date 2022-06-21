// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

export interface ChainConfig {
  feeRate: number;
  chainId: number;
  routerAddress: string;
  tokens: string[];
  routerTokens: string[];
}

export interface DeployConfig {
  [chainName: string]: ChainConfig;
}

const deployConfig: DeployConfig = {
  ethereum: {
    feeRate: 5,
    chainId: 1,
    routerAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    tokens: [
      "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // weth
      "0xdac17f958d2ee523a2206206994597c13d831ec7", // usdt
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", // usdc
      "0x6b175474e89094c44da98b954eedeac495271d0f", // dai
      "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984", // uni

      // "0xB8c77482e45F1F44dE1745F52C74426C631bDD52", // bnb
      "0x4Fabb145d64652a948d72533023f6E7A623C7C53", // busd
      "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", // wbtc
      "0x514910771AF9Ca656af840dff83E8264EcF986CA", // link
      "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE", // shiba
    ],
    routerTokens: [
      "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // weth
      "0xdac17f958d2ee523a2206206994597c13d831ec7", // usdt
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", // usdc
      "0x6b175474e89094c44da98b954eedeac495271d0f", // dai
      "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984", // uni
    ],
  },
  bsc: {
    feeRate: 5,
    chainId: 56,
    routerAddress: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    tokens: [
      "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // wbnb
      "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", // busd
      "0x55d398326f99059fF775485246999027B3197955", // usdt
      "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", // cake
      "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", // usdc

      "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", // eth
      "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", // dai
      "0xbA2aE424d960c26247Dd6c32edC70B295c744C43", // doge
      "0x2859e4544C4bB03966803b044A93563Bd2D0DD4D", // shiba
    ],
    routerTokens: [
      "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", // wbnb
      "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", // busd
      "0x55d398326f99059fF775485246999027B3197955", // usdt
      "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", // cake
      "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", // usdc
    ],
  },
  polygon: {
    feeRate: 5,
    chainId: 137,
    routerAddress: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
    tokens: [
      "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // usdc
      "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", // usdt
      "0x831753DD7087CaC61aB5644b308642cc1c33Dc13", // quick
      "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", // weth
      "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", // wmatic

      // "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3", // bnb
      // "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7", // busd
      "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", // dai
      // "0xb0897686c545045aFc77CF20eC7A532E3120E0F1", // link
    ],
    routerTokens: [
      "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // usdc
      "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", // usdt
      "0x831753DD7087CaC61aB5644b308642cc1c33Dc13", // quick
      "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", // weth
      "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", // wmatic
    ],
  },
  avalanche: {
    feeRate: 5,
    chainId: 43114,
    routerAddress: "0x60aE616a2155Ee3d9A68541Ba4544862310933d4",
    tokens: [
      "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7", // wavax
      "0xc7198437980c041c805a1edcba50c1ce5db95118", // usdt.e
      "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664", // usdc.e
      "0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab", // weth.e
      "0x130966628846bfd36ff31a822705796e8cb8c18d", // mim
      "0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd", // joe

      "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7", // usdt
      "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", // usdc
      "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70", // dai.e
    ],
    routerTokens: [
      "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7", // wavax
      "0xc7198437980c041c805a1edcba50c1ce5db95118", // usdt.e
      "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664", // usdc.e
      "0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab", // weth.e
      "0x130966628846bfd36ff31a822705796e8cb8c18d", // mim
      "0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd", // joe
    ],
  },
  fantom: {
    feeRate: 5,
    chainId: 250,
    routerAddress: "0xF491e7B69E4244ad4002BC14e878a34207E38c29",
    tokens: [
      "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83", // wftm
      "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75", // usdc
      "0x74b23882a30290451A17c44f4F05243b6b58C76d", // eth
      "0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7", // tomb
      "0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE", // boo
      "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E", // dai
      "0x049d68029688eAbF473097a2fC38ef61633A3C7A", // fusdt

      // "0xe1146b9AC456fCbB60644c36Fd3F868A9072fc6E", // fbtc
      "0x658b0c7613e890EE50B8C4BC6A3f41ef411208aD", // feth
      "0x321162Cd933E2Be498Cd2267a90534A804051b11", // btc
    ],
    routerTokens: [
      "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83", // wftm
      "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75", // usdc
      "0x74b23882a30290451A17c44f4F05243b6b58C76d", // eth
      "0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7", // tomb
      "0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE", // boo
      "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E", // dai
      "0x049d68029688eAbF473097a2fC38ef61633A3C7A", // fusdt
    ],
  },
};

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const chainId: number = (await ethers.provider.getNetwork()).chainId;
  const chainName: string =
    Object.keys(deployConfig).find(
      (chainName) => deployConfig[chainName].chainId === chainId
    ) || "";
  const chainConfig: ChainConfig = deployConfig[chainName];
  const TriePay = await ethers.getContractFactory("TriePay");
  const triePay = await TriePay.deploy(
    chainConfig.feeRate,
    chainConfig.chainId,
    chainConfig.routerAddress,
    chainConfig.tokens,
    chainConfig.routerTokens
  );
  await triePay.deployed();
  console.log("TriePay deployed to:", triePay.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
