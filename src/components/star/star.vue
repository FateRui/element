<template>
    <div class="star" :class="elClass">
      <span class="star-item" v-for="(item,index) in calculate" :key="index" :class="item"></span>
    </div>
</template>

<script>
const MaxStar = 5
export default {
  props: {
    score: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: '24'
    }
  },
  computed: {
    elClass () {
      return 'size' + this.size
    },
    calculate () {
      let onCount = Math.floor(this.score)
      let halfCount = this.score - onCount > 0 ? 1 : 0
      let offCount = MaxStar - onCount - halfCount
      let starList = []
      for (let index = 0; index < onCount; index++) {
        starList.push('on')
      }
      if (halfCount === 1) starList.push('half')
      for (let index = 0; index < offCount; index++) {
        starList.push('off')
      }
      return starList
    }
  }
}
</script>

<style scoped lang="less">
  .star{
    font-size: 0;
    display: inline-block;
    line-height: 0 !important;
    &.size24{
      .star-item{
        margin-right: 3px;
        &:last-child{
          margin-right: 0;
        }
      }
      .setStar('star24',10px);
    }
    &.size36{
      .star-item{
        margin-right: 6px;
        &:last-child{
          margin-right: 0;
        }
      }
      .setStar('star36',15px);
    }
    &.size48{
      .star-item{
        margin-right: 22px;
        &:last-child{
          margin-right: 0;
        }
      }
      .setStar('star48',20px);
    }
  }
  .setStar(@img,@size){
    .on{
      .bg_img('@{img}_on',@size);
    }
    .half{
      .bg_img('@{img}_half',@size);
    }
    .off{
      .bg_img('@{img}_off',@size);
    }
  }
  .bg_img(@img,@size) {
    display: inline-block;
    width: @size;
    height: @size;
    background-size: @size @size;
    background-repeat: no-repeat;
    background-image: url("@{img}@2x.png");
    @media (-webkit-max-device-pixel-ratio: 3), (max-device-pixel-ratio: 3) {
      background-image: url("@{img}@3x.png");
    }
  }
</style>
