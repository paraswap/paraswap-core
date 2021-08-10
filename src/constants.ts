export enum SwapSide {
  BUY = 'BUY',
  SELL = 'SELL',
};

export enum ContractMethod {
  swapOnUniswap = 'swapOnUniswap',
  buyOnUniswap = 'buyOnUniswap',
  swapOnUniswapFork = 'swapOnUniswapFork',
  buyOnUniswapFork = 'buyOnUniswapFork',
  simpleBuy = 'simplBuy',
  simpleSwap = 'simpleSwap',
  multiSwap = 'multiSwap',
  megaSwap = 'megaSwap',
  protectedMultiSwap = 'protectedMultiSwap',
  protectedMegaSwap = 'protectedMegaSwap',
  protectedSimpleSwap = 'protectedSimpleSwap',
  protectedSimpleBuy = 'protectedSimpleBuy',
  swapOnZeroXv2 = 'swapOnZeroXv2',
  swapOnZeroXv4 = 'swapOnZeroXv4'
}