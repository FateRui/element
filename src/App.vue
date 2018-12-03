<template>
  <div id="app">
    <header-vue :seller="seller"></header-vue>
    <div class="tabs">
      <router-link :to="{name:'goods'}">商品</router-link>
      <router-link :to="{name:'ratings'}">评价</router-link>
      <router-link :to="{name:'seller'}">商家</router-link>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import headerVue from './components/headerVue/headerVue'
export default {
  data () {
    return {
      seller: {},
      showProduct: false
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

<style scoped lang="less">
  #app {
    .tabs {
      height: 40px;
      display: flex;
      a {
        flex: 1;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        color: rgb(77,85,93);
        font-weight: 200;
        &.router-link-active{
          color: rgb(240,20,20);
        }
      }
    }
  }
</style>
