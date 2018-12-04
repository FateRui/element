<template>
    <div class="ratingControl">
      <div class="item-warpper">
        <div class="item" v-for="(item,index) in selectObject.items" :key="index" :class="{active:selectObject.selectIndex===index}" @click="toggle(index)">
          <span class="title" v-text="item"></span><span class="count">{{calculate[index]}}</span>
        </div>
      </div>
      <div class="showContent" @click="showContent">
        <span class="icon icon-check_circle" :class="{'normal':!selectObject.showContent, 'active':selectObject.showContent}"></span><span class="text">只看有内容的评价</span>
      </div>
    </div>
</template>

<script>
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
  methods: {
    toggle (index) {
      this.selectObject.selectIndex = index
    },
    showContent () {
      this.selectObject.showContent = !this.selectObject.showContent
    }
  },
  computed: {
    calculate () {
      let counts = []
      counts.push(this.ratings.length)
      let positive = 0
      let negative = 0
      for (let rating of this.ratings) {
        if (rating.rateType === 0) {
          positive++
          continue
        }
        if (rating.rateType === 1) {
          negative++
        }
      }
      counts.push(positive)
      counts.push(negative)
      return counts
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../common/less/iconfont";
  .ratingControl{
    .border-bottom-1px(rgba(7,17,27,.1));
    .item-warpper{
      padding: 18px 0;
      margin: 0 18px;
      font-size: 0;
      .border-bottom-1px(rgba(7,17,27,.1));
      .item{
        display: inline-block;
        padding: 8px 12px;
        margin-right: 8px;
        border-radius: 2px;
        color: #000;
        .title{
          font-size: 12px;
          line-height: 16px;
        }
        .count{
          font-size: 8px;
          line-height: 16px;
        }
      }
      .item:nth-of-type(1){
        background-color: #c7e6f5;
      }
      .item:nth-of-type(2){
        background-color: #c7e6f5;
      }
      .item:nth-of-type(3){
        background-color: #e4e6e7;
      }
      .item.active{
        background-color: #2f8ed3;
        color: #fff;
      }
    }
    .showContent{
      padding: 12px 0;
      padding-left: 18px;
      .icon{
        font-size: 24px;
        line-height: 24px;
        vertical-align: middle;
        margin-right: 4px;
        &.normal{
          color: rgb(147,153,159);
        }
        &.active{
          color:#2f8ed3;
        }
      }
      .text{
        line-height: 24px;
        font-size: 12px;
        vertical-align: middle;
        color: rgb(147,153,159);
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
