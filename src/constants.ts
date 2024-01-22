export enum SwapSide {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum ContractMethod {
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

  // V6 direct methods

  // Uniswap
  directUniV2SwapV6 = 'swapExactAmountInOnUniswapV2',
  directUniV2BuyV6 = 'swapExactAmountOutOnUniswapV2',
  directUniV3SwapV6 = 'swapExactAmountInOnUniswapV3',
  directUniV3BuyV6 = 'swapExactAmountOutOnUniswapV3',

  // CurveV1
  directCurveV1SwapV6 = 'swapExactAmountInOnCurveV1',

  // CurveV2
  directCurveV2SwapV6 = 'swapExactAmountInOnCurveV2',

  // BalancerV2
  directBalancerV2SwapV6 = 'swapExactAmountInOnBalancerV2',
  directBalancerV2BuyV6 = 'swapExactAmountOutOnBalancerV2',
}

export const DirectContractMethodsWithFeeModel: ContractMethod[] = [
  ContractMethod.directUniV3Swap,
  ContractMethod.directUniV3Buy,
  ContractMethod.directCurveV1Swap,
  ContractMethod.directCurveV2Swap,
  ContractMethod.directBalancerV2GivenInSwap,
  ContractMethod.directBalancerV2GivenOutSwap,
  ContractMethod.directUniV2SwapV6,
  ContractMethod.directUniV2BuyV6,
  ContractMethod.directUniV3SwapV6,
  ContractMethod.directUniV3BuyV6,
  ContractMethod.directCurveV1SwapV6,
  ContractMethod.directCurveV2SwapV6,
  ContractMethod.directBalancerV2SwapV6,
  ContractMethod.directBalancerV2BuyV6,
];

export const DirectContractMethods: ContractMethod[] = [
  ContractMethod.swapOnUniswap,
  ContractMethod.buyOnUniswap,
  ContractMethod.swapOnUniswapFork,
  ContractMethod.buyOnUniswapFork,
  ContractMethod.swapOnUniswapV2Fork,
  ContractMethod.buyOnUniswapV2Fork,
  ContractMethod.swapOnZeroXv2,
  ContractMethod.swapOnZeroXv4,
].concat(DirectContractMethodsWithFeeModel);
