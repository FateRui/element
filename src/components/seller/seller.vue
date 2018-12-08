<template>
    <div class="seller" ref="seller">
      <div class="seller-warpper">
        <div class="seller-message">
          <div class="title-message">
            <h3 class="name" v-text="seller.name"></h3>
            <div class="seller-detail">
              <star size="36" :score="seller.score" class="star"></star><span v-text="`(${seller.ratingCount})`"></span><span v-text="`月售${seller.sellCount}份`"></span>
            </div>
          </div>
          <div class="deliver-message">
            <div class="minPrice">
              <p class="title">起送价</p>
              <div class="number">
                <span v-text="seller.minPrice"></span><span>元</span>
              </div>
            </div>
            <div class="deliveryPrice">
              <p class="title">商家配送</p>
              <div class="number">
                <span v-text="seller.deliveryPrice"></span><span>元</span>
              </div>
            </div>
            <div class="deliveryTime">
              <p class="title">平均配送时间</p>
              <div class="number">
                <span v-text="seller.deliveryTime"></span><span>分钟</span>
              </div>
            </div>
          </div>
        </div>
        <split></split>
        <div class="notice">
          <h3>公告与活动</h3>
          <p v-text="seller.bulletin" class="text"></p>
          <ul v-if="seller.supports">
            <li class="notice-item" v-for="(item,index) in seller.supports" :key="index">
              <div class="content"><bullentin-icon size="16" :type="item.type"></bullentin-icon><span v-text="item.description" class="description"></span></div>
            </li>
          </ul>
        </div>
        <split></split>
        <div class="seller-images">
          <h3>商家实景</h3>
          <div class="images" id="images">
            <div class="images-warpper" ref="imgContainer">
              <img :src="item" v-for="(item,index) in seller.pics" :key="index">
            </div>
          </div>
        </div>
        <split></split>
        <div class="seller-produce">
          <h3>商家信息</h3>
          <ul>
            <li v-for="(item,index) in seller.infos" class="text" :key="index">
              <p v-text="item"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import star from '../../components/star/star'
import split from '../../components/split/split'
import bullentinIcon from '../../components/bullentinIcon/bullentinIcon'
import BtScroll from 'better-scroll'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  components: {star, split, bullentinIcon},
  mounted () {
    this._init_scroll()
  },
  updated () {
    this._init_scroll()
  },
  activated () {
    this._init_scroll()
  },
  methods: {
    _init_scroll () {
      if (!this.seller_scroll) {
        this.seller_scroll = new BtScroll('.seller', {
          scrollY: true,
          click: true
        })
      } else {
        this.seller_scroll.refresh()
      }
      let wid = 0
      if (this.seller.pics) {
        wid = this.seller.pics.length * 126 - 12
      }
      this.$refs.imgContainer.style.width = wid + 'px'
      if (!this.image_scroll) {
        this.image_scroll = new BtScroll('#images', {
          scrollX: true,
          click: true
        })
      } else {
        this.image_scroll.refresh()
      }
    }
  }
}
</script>

<style scoped lang="less">
  .seller{
    position: absolute;
    top: 174px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .seller-warpper{
      .seller-message{
        margin: 0 18px;
        .title-message{
          padding: 18px 0;
          .border-bottom-1px(rgba(7,17,27,.1));
          .name{
            font-size: 14px;
            line-height: 14px;
            color: rgb(7,17,27);
          }
          .seller-detail{
            margin-top: 8px;
            font-size: 0;
            .star{
              display: inline-block;
            }
            span:nth-child(2){
              margin-left:8px;
              font-size: 10px;
              line-height: 18px;
              color: rgb(77,85,93);
              vertical-align: top;
            }
            span:last-child{
              margin-left:12px;
              font-size: 10px;
              line-height: 18px;
              color: rgb(77,85,93);
              vertical-align: top;
            }
          }
        }
        .deliver-message{
          display: flex;
          .minPrice, .deliveryPrice, .deliveryTime{
            flex: 1;
            .border-right-1px(rgba(7,17,27,.1));
            margin: 18px 0;
            text-align: center;
            .title{
              font-size: 10px;
              line-height: 10px;
              color: rgb(147,143,159);
            }
          }
          .deliveryTime{
            .border-none
          }
          .number{
            margin-top: 4px;
            span:first-child{
              font-size: 24px;
              line-height: 24px;
              font-weight: 200;
              color: rgb(7,17,27);
            }
            span:last-child{
              font-size: 10px;
              line-height: 24px;
              font-weight: 200;
              color: rgb(7,17,27);
            }
          }
        }
      }
      .notice{
        margin: 0 18px;
        h3{
          margin-top: 18px;
          font-size: 14px;
          line-height: 14px;
          color: rgb(7,17,27);
          font-weight: 700;
        }
        .text{
          padding: 8px 12px 16px 12px;
          font-size: 12px;
          line-height: 24px;
          color: rgb(240,20,20);
          font-weight: 200;
        }
        .notice-item{
          font-size: 0;
          .border-top-1px(rgba(7,17,27,.1));
          .content{
            padding: 16px 12px;
            .description{
              font-size: 12px;
              line-height: 16px;
              font-weight: 200;
              color: rgb(7,17,27);
              vertical-align: top;
              margin-left:6px ;
            }
          }
        }
      }
      .seller-images{
        margin:18px 0 18px 0;
        h3{
          margin-left: 18px;
          font-size: 14px;
          line-height: 14px;
          color: rgb(7,17,27);
          font-weight: 700;
        }
        .images{
          margin-left: 18px;
          margin-top: 12px;
          .images-warpper{
            font-size: 0;
            white-space: nowrap;
            img{
              width: 120px;
              height: 90px;
              margin-right: 6px;
              &:last-child{
                margin-right: 0;
              }
            }
          }
        }
      }
      .seller-produce{
        margin: 0 18px;
        h3{
          padding: 12px 0;
          font-size: 14px;
          line-height: 14px;
          color: rgb(7,17,27);
          font-weight: 700;
        }
        .text{
          .border-top-1px(rgba(7,17,27,.1));
          p{
            padding: 18px 12px;
            font-size: 12px;
            line-height: 16px;
            font-weight: 200;
            color: rgb(7,17,27);
          }
        }
      }
    }
  }
  .border-top-1px(@color){
    position: relative;
    &:before{
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      top: 0;
      bottom: 0;
      background-color: @color;
      transform: scaleY(0.33);
    }
  }
  .border-bottom-1px(@color){
    position: relative;
    &:after{
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      bottom: 0;
      background-color: @color;
      transform: scaleY(0.33);
    }
  }
  .border-right-1px(@color){
    position: relative;
    &:after{
      content: '';
      display: block;
      position: absolute;
      width: 1px;
      height: 100%;
      right: 0;
      bottom: 0;
      background-color: @color;
      transform: scaleX(0.33);
    }
  }
  .border-none{
    &:after{
      display: none;
    }
  }
</style>
