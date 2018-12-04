<template>
    <div class="ratings">
      <div class="ratings-warpper">
        <div class="mark">
          <div class="left">
            <div v-text="seller.score"></div>
            <p>综合评分</p>
            <p>高于周边商家{{seller.rankRate}}</p>
          </div>
          <div class="right">
            <div class="item">
              <span class="title">服务态度</span><star size=36 :score="seller.serviceScore" class="star"></star><span class="score">{{seller.serviceScore}}</span>
            </div>
            <div class="item">
              <span class="title">食品评分</span><star size=36 :score="seller.foodScore" class="star"></star><span class="score">{{seller.foodScore}}</span>
            </div>
            <div class="item">
              <span class="title">送达时间</span><span class="time">{{seller.deliveryTime}}分钟</span>
            </div>
          </div>
        </div>
        <split></split>
        <rating-control :selectObject="selectObject" :ratings="ratings"></rating-control>
        <div class="ratings-content">
          <ul>
            <li >
              <div class="ratings-item">

              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import star from '../star/star'
import split from '../split/split'
import ratingControl from '../ratingControl/ratingControl'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  components: {star, split, ratingControl},
  data () {
    return {
      selectObject: {
        showContent: false,
        items: ['全部', '满意', '不满意'],
        selectIndex: 1
      },
      ratings: []
    }
  },
  created () {
    this.$axios.get('/api/ratings').then((data) => {
      this.ratings = data.data.data
    })
  }
}
</script>

<style scoped lang="less">
.ratings{
  .ratings-warpper{
    .mark{
      display: flex;
      .left{
        .border-right-1px(rgba(7,17,27,.1));
        width: 138px;
        @media screen and (max-width:320px){
          width: 120px;
        }
        margin:18px 0;
        text-align: center;
        div{
          font-size: 24px;
          line-height: 28px;
          color: rgb(255,153,0);
        }
        p:nth-of-type(1){
          margin-top: 6px;
          font-size: 12px;
          line-height: 12px;
          color: rgb(7,17,27);
        }
        p:nth-of-type(2){
          font-size: 10px;
          line-height: 10px;
          color: rgb(7,17,27);
          margin-top: 6px;
          margin-bottom: 6px;
        }
      }
      .right{
        flex: 1;
        margin:18px 0 18px 24px;
        @media screen and (max-width: 375px){
          margin-left: 12px;
        }
        .item{
          margin-bottom:8px;
          font-size: 0;
          line-height: 18px;
          &:last-child{
            margin-bottom: 0;
          }
          .title{
            color: rgb(7,17,27);
            margin-right: 12px;
            font-size: 12px;
            @media screen and (max-width: 375px){
              margin-right: 6px;
            }
            vertical-align: middle;
          }
          .star{
            vertical-align: middle;
          }
          .score{
            margin-left: 12px;
            font-size: 12px;
            vertical-align: middle;
            @media screen and (max-width: 375px){
              margin-left: 6px;
            }
            color: rgb(255,153,0);
          }
          .time{
            color: rgb(147,153,159);
            font-size: 12px;
            vertical-align: middle;
          }
        }
      }
    }
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
</style>
