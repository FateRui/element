<template>
  <transition name="fade">
    <div class="sellerProduce" v-if="show">
        <div class="product-warpper">
          <div class="content">
            <h1 class="name" v-text="seller.name"></h1>
            <div class="star-warpper"><star size=48 :score='seller.score'></star></div>
            <div class="title-warpper"><line-title text="优惠信息" space="12px" color="rgba(255,255,255,.2)"></line-title></div>
            <div class="bulletin-list">
              <ul>
                <li v-for="(item,index) in seller.supports" :key="index" class="bulletin-item">
                  <bullentin-icon :type="item.type" size="16"></bullentin-icon><span v-text="item.description"></span>
                </li>
              </ul>
            </div>
            <div class="title-warpper"><line-title text="商家公告" space="12px" color="rgba(255,255,255,.2)"></line-title></div>
            <div class="text" v-text="seller.bulletin"></div>
          </div>
        </div>
        <div class="icon-close close" @click="toggleMe"></div>
    </div>
  </transition>
</template>

<script>
import star from '../../components/star/star'
import lineTitle from '../../components/lineTitle/lineTitle'
import bullentinIcon from '../../components/bullentinIcon/bullentinIcon'
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
  components: {star, lineTitle, bullentinIcon}
}
</script>

<style scoped lang="less">
  @import "../../common/less/iconfont";
  .sellerProduce{
    position: fixed;
    overflow: auto;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background:rgba(7,17,27,.8);
    backdrop-filter: blur(10px);
    &.fade-enter,&fade-leave-to{
      opacity: 0;
    }
    &.fade-enter-active,&fade-leave-active{
      transition: all .5s;
    }
    .product-warpper{
      margin: 0 36px;
      min-height: 100%;
      .content{
        padding-bottom: 64px;
        .name{
          padding-top: 64px;
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
        .title-warpper{
          margin-top: 28px;
        }
        .bulletin-list{
          margin-top: 24px;
          padding: 0 12px;
          .bulletin-item{
            font-size: 12px;
            line-height: 12px;
            font-weight: 200;
            color: rgb(255,255,255);
            margin-bottom: 12px;
            &:last-child{
              margin-bottom: 0;
            }
            span{
              vertical-align: middle;
              &:last-child{
                margin-left: 6px;
              }
            }
          }
        }
        .text{
          margin-top: 24px;
          padding: 0 12px;
          font-size: 12px;
          color: rgb(255,255,255);
          font-weight: 200;
          line-height: 24px;
        }
      }
    }
    .close{
      line-height: 32px;
      font-size: 32px;
      color: rgba(255,255,255,.5);
      text-align: center;
      position: relative;
      top: -32px;
      left: 0;
    }
  }
</style>
