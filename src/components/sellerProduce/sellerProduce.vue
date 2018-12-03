<template>
  <div class="sellerProduce" v-if="show">
    <div class="product-warpper">
      <div class="content">
        <h1 class="name" v-text="seller.name"></h1>
        <div class="star-warpper"><star size=48 :score='seller.score'></star></div>
      </div>
    </div>
    <div class="icon-close close" @click="toggleMe"></div>
  </div>
</template>

<script>
import star from '../../components/star/star'
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggleMe () {
      this.show = !this.show
    }
  },
  props: {
    seller: {
      type: Object
    }
  },
  components: {star}
}
</script>

<style scoped lang="less">
  @import "../../common/less/iconfont";
  .sellerProduce{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(7,17,27,.8);
    .product-warpper{
      margin: 0 36px;
      min-height: 100%;
      .content{
        padding-bottom: 64px;
        .name{
          margin-top: 64px;
          text-align: center;
          font-size: 16px;
          line-height: 16px;
          font-weight: 700;
          color: #fff;
        }
        .star-warpper{
          text-align: center;
          margin-top: 16px;
        }
      }
    }
    .close{
      line-height: 32px;
      font-size: 32px;
      color: rgba(255,255,255,.5);
      text-align: center;
      position: relative;
      top: -64px;
      left: 0;
    }
  }
</style>
