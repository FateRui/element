<template>
    <div class="sellerRatings">
      <div class="ratings-item" v-for="(rating, index) in ratings" :key="index" v-show="show(rating)">
        <div class="avatar">
          <img :src="rating.avatar" alt="">
        </div>
        <div class="rating">
          <div class="username">
            <span v-text="rating.username" class="number"></span>
            <span class="time">{{rating.rateTime | formateData}}</span>
          </div>
          <div class="star-warpper">
            <star size=24 :score='rating.score'></star><span class="deliveryTime">{{rating.deliveryTime ? rating.deliveryTime :'30'}}分钟送达</span>
          </div>
          <p class="text" v-text="rating.text"></p>
          <div class="recommend">
            <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}" class="recommend-hand"></span><div v-for="(item,index) in rating.recommend" :key="index" v-text="item" class="recommend-item"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import star from '../star/star'
export default {
  props: {
    selectObject: {
      type: Object,
      default () {
        return {
          showContent: false,
          items: ['全部', '满意', '不满意'],
          selectIndex: 0
        }
      }
    },
    ratings: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {star},
  filters: {
    formateData (str) {
      let date = new Date(str)
      let year = date.getFullYear()
      let month = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth()
      let day = date.getDay() > 9 ? date.getDay() : '0' + date.getDay()
      let hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
      let minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute
    }
  },
  methods: {
    show (Object) {
      let showMe = false
      if (this.selectObject.showContent) {
        if (Object.text.length > 0) {
          showMe = true
        }
      } else {
        if (this.selectObject.selectIndex === 0) {
          showMe = true
        }
        if (this.selectObject.selectIndex === 1 && Object.rateType === 0) {
          showMe = true
        }
        if (this.selectObject.selectIndex === 2 && Object.rateType === 1) {
          showMe = true
        }
      }
      return showMe
    }
  }
}
</script>

<style scoped lang="less">
@import "../../common/less/iconfont";
  .sellerRatings{
    .ratings-item{
      .border-bottom-1px(rgba(7,17,27,.1));
      margin:0 18px;
      padding: 18px 0;
      display: flex;
      .avatar{
        width: 28px;
        height: 28px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .rating{
        flex: 1;
        margin-left: 12px;
        .username{
          font-size: 0;
          .number{
            font-size: 10px;
            line-height: 12px;
            color: rgb(7,17,27);
          }
          .time{
            font-size: 10px;
            line-height: 12px;
            margin-top: 1px;
            color: rgb(147,153,159);
            float: right;
          }
        }
        .star-warpper{
          .deliveryTime{
            font-size: 10px;
            line-height: 12px;
            font-weight: 200;
            color: rgb(137,153,159);
            margin-left: 6px;
          }
        }
        .text{
          margin-top: 6px;
          font-size: 12px;
          line-height: 18px;
          color: rgb(7,17,27);
        }
        .recommend{
          margin-top: 8px;
          .recommend-hand{
           font-size: 12px;
           line-height: 16px;
           &.icon-thumb_up{
             color: rgb(0,160,220);
           }
            &.icon-thumb_down{
            color: rgb(183,187,191);
            }
          }
          .recommend-item{
            display: inline-block;
            font-size: 9px;
            line-height: 16px;
            color: rgb(147,153,159);
            padding:0 6px;
            border: 1px solid rgba(7,17,27,.1);
            margin-left: 8px;
            border-radius: 2px;
          }
        }
      }
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
</style>
