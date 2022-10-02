<template>
<div class="left-drawer-content q-px-sm">
  <q-list>
    <q-item
      v-for="link in links"
      :key="link.label"
      class="menu-item q-pa-md rounded-borders q-mt-sm shadow-1"
      :to="{ name: link.routeName }"
      clickable
      exact-active-class="bg-accent text-white"
    >
      <q-item-section class="text-subtitle1 text-bold">
        <q-item-label>{{ link.label }}</q-item-label>
        <q-item-label caption>{{ link.caption }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</div>
</template>

<script>
import menuLinks from 'src/config/menu-links'
export default {
  name: 'left-drawer-content',
  computed: {
    links () {
      return menuLinks
    }
  }
}
</script>

<style lang="sass">
.menu-item
  background: $dark
</style>
