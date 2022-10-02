export default function () {
  return {
    isInit: false,
    coins: ['USDT', 'BUSD', 'BTC', 'ETH', 'BNB', 'ETH', 'SHIB'],
    currencies: [],
    sellOrders: [],
    buyOrders: [],
    selectedCurrency: {},
    selectedCoin: ''
  }
}
