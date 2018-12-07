<template>
  <div class="shopCart" :class="showClass">
    <div class="cart-warpper">
      <div class="icon-shopping_cart">
      </div>
      <div class="count" v-if="count>0">{{count}}</div>
    </div>
    <div class="detail">
      <span class="allCount">&yen;{{allMoney}}</span>
      <span class="tip">还需配送费{{seller.deliveryPrice}}元</span>
    </div>
    <div class="buy">
      {{accountStr}}
    </div>
  </div>
</template>

<script>
export default {
  created () {
  },
  props: {
    goods: Array,
    seller: Object
  },
  computed: {
    count () {
      let sum = 0
      this.$store.state.goods.forEach((foodGroup) => {
        if (foodGroup['foods']) {
          foodGroup['foods'].forEach((food) => {
            if (food.count) {
              sum += food.count
            }
          })
        }
      })
      return sum
    },
    foodList () {
      let foodList = []
      this.$store.state.goods.forEach((foodGroup) => {
        if (foodGroup['foods']) {
          foodGroup['foods'].forEach((food) => {
            if (food.count && food.count > 0) {
              foodList.push(food)
            }
          })
        }
      })
      return foodList
    },
    allMoney () {
      let sum = 0
      this.foodList.forEach((item, index) => {
        sum += item.count * item.price
      })
      return sum
    },
    accountStr () {
      if (this.allMoney === 0) {
        return `¥${this.seller.minPrice}起送`
      }
      let gap = this.seller.minPrice - this.allMoney
      if (gap <= 0) {
        return `去结算`
      } else {
        return `还差¥${gap}元起送`
      }
    },
    showClass () {
      let gap = this.seller.minPrice - this.allMoney
      if (gap <= 0) {
        return ['account']
      }
      if (this.count > 0) {
        return ['hasCount']
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../common/less/iconfont";
  .shopCart{
    height: 48px;
    width: 100%;
    background-color: #141d27;
    position: relative;
    &.hasCount, &.account{
      background-color: #08121c;
      .icon-shopping_cart{
        background: #00a0dc !important;
        color: #fff !important;
      }
      .detail{
        .allCount{
          color: #fff;
        }
      }
    }
    &.account{
      .buy{
        background: #00b43c;
        color: #fff;
      }
    }
    .cart-warpper{
      padding: 6px;
      background: #141d27;
      position: absolute;
      left: 12px;
      bottom: 2px;
      border-radius: 50%;
      .icon-shopping_cart{
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: #2b333b;
        font-size: 24px;
        line-height: 44px;
        color: rgba(255,255,255,.4);
        text-align: center;
      }
      .count{
        position: absolute;
        right: 0;
        top: 0;
        width: 24px;
        font-size: 9px;
        line-height: 16px;
        text-align: center;
        font-weight: 700;
        color: #fff;
        border-radius: 12px;
        background: rgb(240,20,20);
      }
    }
    .detail{
      margin-left: 68px;
      font-size: 0;
      .allCount{
        display: inline-block;
        padding:0 12px;
        margin-top: 12px;
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        color: rgba(255,255,255,.4);
        .border-right-1px(rgba(255,255,255,.1));
      }
      .tip{
        display: inline-block;
        padding-left:12px;
        margin-top: 12px;
        margin-bottom: 12px;
        font-size: 12px;
        font-weight: 400;
        line-height: 24px;
        color: rgba(255,255,255,.4);
      }

    }
    .buy{
      position: absolute;
      right: 0;
      top: 0;
      width: 105px;
      font-size: 12px;
      line-height: 48px;
      color: rgba(255,255,255,.4);
      font-weight: 700;
      text-align: center;
      background: #2b333b;
    }
  }
  .border-right-1px(@color){
    position: relative;
    &:after{
      content: "";
      display: block;
      width: 1px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      background: @color;
      transform: scaleX(0.33);
    }
  }
</style>
