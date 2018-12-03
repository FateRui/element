<template>
    <div class="header">
      <div class="header-warpper">
        <div class="avatar">
          <img :src="seller.avatar" alt="">
        </div>
        <div class="seller-detial">
          <div class="name">
            <span class="brand"></span>
            <span class="text" v-text="seller.name"></span>
          </div>
          <p class="description" v-text="`${ seller.description }/${seller.deliveryTime}分钟送达`"></p>
          <div class="supports" v-if="seller.supports">
            <span><bullentinIcon size=12 :type='seller.supports[0].type' ></bullentinIcon></span><span class="text" v-text="seller.supports[0].description"></span>
          </div>
          <div class="bullentin-count" v-if="seller.supports">
            <span class="count" v-text="`${seller.supports.length}个`"></span><span class="icon-keyboard_arrow_right"></span>
          </div>
        </div>
      </div>
      <div class="bulletin-warpper">
        <span class="icon"></span>
        <p v-text="seller.bulletin"></p>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
      <div class="bg-img">
        <img :src="seller.avatar">
      </div>
    </div>
</template>

<script>
import bullentinIcon from '../bullentinIcon/bullentinIcon'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  components: { bullentinIcon }
}
</script>

<style scoped lang="less">
  @import "../../common/less/iconfont";
  .header{
    background: rgba(7,17,27,.5);
    position: relative;
    overflow: hidden;
    .header-warpper{
      padding: 24px 12px 18px 24px;
      display: flex;
      .avatar{
        font-size: 0;
        width: 64px;
        height: 64px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .seller-detial {
        flex: 1;
        margin-left: 16px;
        position: relative;
        .name{
          font-size: 0;
          margin-top: 2px;
          .text{
            font-size: 16px;
            line-height: 18px;
            font-weight: bold;
            color: rgb(255,255,255);
            margin-left: 2px;
          }
          .brand{
            display: inline-block;
            width: 30px;
            height: 18px;
            background-size: 30px 18px;
            background-repeat: no-repeat;
            .bg_img('brand');
            vertical-align: top;
          }
        }
        .description{
          margin-top: 8px;
          font-size: 12px;
          line-height: 12px;
          font-weight: 200;
          color: rgb(255,255,255);
        }
        .supports{
          font-size: 0;
          margin: 10px 0 2px 0;
          .text{
            margin-left: 4px;
            color: rgb(255,255,255);
            font-weight: 200;
            font-size: 10px;
            line-height: 12px;
            vertical-align: top;
          }
        }
        .bullentin-count{
          position: absolute;
          right: 0;
          bottom: 0;
          padding: 7px 8px;
          background:rgba(0,0,0,.2);
          font-size: 0;
          border-radius: 24px;
          .count,.icon-keyboard_arrow_right{
            font-size: 10px;
            line-height: 12px;
            font-weight: 200;
            color: #fff;
            text-align: center;
            vertical-align: middle;
          }
          .icon-keyboard_arrow_right{
            margin-left: 2px;
          }
        }
      }
    }
    .bulletin-warpper{
      background: rgba(7,17,27,.2);
      height: 28px;
      line-height: 28px;
      font-size: 0;
      display: flex;
      padding: 0 12px;
      .icon {
        width: 22px;
        height: 12px;
        background-size: 22px 12px;
        .bg_img('bulletin');
        margin-top: 8px;
        margin-right: 4px;
      }
      .icon-keyboard_arrow_right,p{
        font-size: 10px;
        color: #fff;
        line-height: 28px;
        font-weight: 200;
      }
      p{
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: 4px;
      }
    }
    .bg-img{
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      filter: blur(10px);
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .bg_img(@img){
    background-image: url('@{img}@2x.png');
    @media (-webkit-max-device-pixel-ratio: 3),(max-device-pixel-ratio: 3){
      background-image: url('@{img}@3x.png');
    }
  }
</style>
