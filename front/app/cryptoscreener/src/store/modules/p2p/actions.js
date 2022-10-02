import errorHandler from 'src/utils/error-handler'
import axios from 'axios'
import config from 'src/config'

export function init ({ dispatch, commit }) {
  Promise.all([
    dispatch('loadCurrencies')
  ]).then(async () => {
    dispatch('setDefaultCurrency')
    dispatch('setDefaultCoin')
    await dispatch('loadBuyOrders')
    commit('mutationIsInit', true)
  })
}

export function setDefaultCurrency ({ commit, state }, currency = null) {
  if (!currency) {
    currency = localStorage.getItem('currency')
    if (currency) currency = JSON.parse(currency)
  }
  if (currency) commit('mutationSelectedCurrency', currency)
  else commit('mutationSelectedCurrency', state.currencies.find(i => i.name === config.defaultCurrencyName))
}

export function setDefaultCoin ({ commit, state }, coin = null) {
  if (!coin) {
    coin = localStorage.getItem('coin')
  }
  if (coin) commit('mutationSelectedCoin', coin)
  else commit('mutationSelectedCoin', config.defaultP2PCoin)
}

export async function loadCurrencies ({ commit }) {
  try {
    await axios
      .get('https://p2p.binance.com/bapi/fiat/v1/public/fiatpayment/menu/currency')
      .then(res => {
        commit('mutationCurrencies', res.data?.data?.currencyList || [])
      })
  } catch (err) {
    errorHandler(err)
  }
}

export async function loadBuyOrders ({ commit, state }) {
  try {
    await axios
      .post('https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search', {
        page: 1,
        rows: 10,
        payTypes: [],
        countries: [],
        tradeType: 'BUY',
        asset: state.selectedCoin,
        fiat: state.selectedCurrency.name,
        merchantCheck: false,
        publisherType: null
      }, {
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive',
          'Content-Length': '123',
          'content-type': 'application/json',
          Host: 'p2p.binance.com',
          Origin: 'https://p2p.binance.com',
          Pragma: 'no-cache',
          TE: 'Trailers',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0'
        }
      })
      .then(res => {
        debugger
      })
      .catch(err => {
        console.log(err)
        debugger
      })
  } catch (err) {
    errorHandler(err)
  }
}
