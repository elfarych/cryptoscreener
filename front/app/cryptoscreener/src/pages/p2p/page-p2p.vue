<template>
<q-page class="page-container">
  <div>
    <base-page-title title="P2P Screener" sub-title="Скринер P2P ордеров на Binance"/>
  </div>
</q-page>
</template>

<script>
import { mapActions } from 'vuex'
import BasePageTitle from 'components/base-page-title'
export default {
  name: 'page-p2p',
  components: { BasePageTitle },
  methods: {
    ...mapActions('p2p', ['init'])
  },
  created () {
    this.init()
  }
}
</script>

<style lang="sass">

</style>
