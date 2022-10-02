<template>
<div class="base-page-title">
  <h1 class="text-h4 text-bold">{{ title }}</h1>
  <h2 class="text-subtitle1 text-bold">{{ subTitle }}</h2>
</div>
</template>

<script>
export default {
  name: 'base-page-title',
  props: {
    title: String,
    subTitle: String
  }
}
</script>

<style scoped>

</style>
