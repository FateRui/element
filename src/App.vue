<template>
  <div id="app">
    <header-vue :seller="seller"></header-vue>
  </div>
</template>

<script>
import headerVue from './components/headerVue/headerVue'
export default {
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$axios.get('/api/seller').then((res) => {
      this.seller = res.data.data
    }).catch((err) => {
      console.log('网络错误' + err)
    })
  },
  components: { headerVue }
}
</script>

<style>

</style>
