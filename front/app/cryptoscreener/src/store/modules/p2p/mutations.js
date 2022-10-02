export function mutationSelectedCoin (state, data) {
  state.selectedCoin = data
}

export function mutationIsInit (state, data) {
  state.isInit = data
}

export function mutationSelectedCurrency (state, data) {
  state.selectedCurrency = data
}

export function mutationCurrencies (state, data) {
  state.currencies = data
}

export function mutationSellOrders (state, data) {
  state.sellOrders = data
}

export function mutationBuyOrders (state, data) {
  state.buyOrders = data
}
