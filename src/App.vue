<template>
  <div id="app">
    首页
  </div>
</template>

<script>
export default {
  created () {
    this.$axios.get('/api/goods').then((data) => {
      console.log(data)
    })
  }
}
</script>

<style>

</style>
