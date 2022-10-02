<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left"/>

        <q-toolbar-title class="text-h5 text-accent text-uppercase text-bold">
          Crypto screener
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" content-style="background: #212121">
      <!-- drawer content -->
      <left-drawer-content/>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import LeftDrawerContent from 'components/left-drawer/left-drawer-content'

export default {
  components: { LeftDrawerContent },
  data () {
    return {
      left: false
    }
  }
}
</script>
