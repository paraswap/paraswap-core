export enum SwapSide {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum ContractMethodV5 {
  swapOnUniswap = 'swapOnUniswap',
  buyOnUniswap = 'buyOnUniswap',
  swapOnUniswapFork = 'swapOnUniswapFork',
  buyOnUniswapFork = 'buyOnUniswapFork',
  swapOnUniswapV2Fork = 'swapOnUniswapV2Fork',
  buyOnUniswapV2Fork = 'buyOnUniswapV2Fork',
  simpleBuy = 'simpleBuy',
  simpleSwap = 'simpleSwap',
  multiSwap = 'multiSwap',
  megaSwap = 'megaSwap',
  protectedMultiSwap = 'protectedMultiSwap',
  protectedMegaSwap = 'protectedMegaSwap',
  protectedSimpleSwap = 'protectedSimpleSwap',
  protectedSimpleBuy = 'protectedSimpleBuy',
  swapOnZeroXv2 = 'swapOnZeroXv2',
  swapOnZeroXv4 = 'swapOnZeroXv4',
  buy = 'buy', // TODO: remove this in future

  directUniV3Swap = 'directUniV3Swap',
  directUniV3Buy = 'directUniV3Buy',
  directCurveV1Swap = 'directCurveV1Swap',
  directCurveV2Swap = 'directCurveV2Swap',
  directBalancerV2GivenInSwap = 'directBalancerV2GivenInSwap',
  directBalancerV2GivenOutSwap = 'directBalancerV2GivenOutSwap',
}

export const DirectContractMethodsWithFeeModel: ContractMethodV5[] = [
  ContractMethodV5.directUniV3Swap,
  ContractMethodV5.directUniV3Buy,
  ContractMethodV5.directCurveV1Swap,
  ContractMethodV5.directCurveV2Swap,
  ContractMethodV5.directBalancerV2GivenInSwap,
  ContractMethodV5.directBalancerV2GivenOutSwap,
];

export const DirectContractMethods: ContractMethodV5[] = [
  ContractMethodV5.swapOnUniswap,
  ContractMethodV5.buyOnUniswap,
  ContractMethodV5.swapOnUniswapFork,
  ContractMethodV5.buyOnUniswapFork,
  ContractMethodV5.swapOnUniswapV2Fork,
  ContractMethodV5.buyOnUniswapV2Fork,
  ContractMethodV5.swapOnZeroXv2,
  ContractMethodV5.swapOnZeroXv4,
].concat(DirectContractMethodsWithFeeModel);

export enum ContractMethodV6 {
  genericSwap = 'genericSwap',
}

export const ContractMethod = { ...ContractMethodV5, ...ContractMethodV6 };

export type ContractMethod = ContractMethodV5 | ContractMethodV6;
