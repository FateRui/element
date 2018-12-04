<template>
    <div class="line-title">
      <div class="line" ref="left"></div>
      <div class="title" v-text="text"></div>
      <div class="line" ref="right"></div>
    </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    space: {
      type: String,
      default: '0'
    },
    color: {
      type: String,
      default: 'rgb(0,0,0)'
    }
  },
  mounted () {
    this.$refs.left.style.marginRight = this.space
    this.$refs.right.style.marginLeft = this.space
    this.$refs.left.style.backgroundColor = this.color
    this.$refs.right.style.backgroundColor = this.color
  }
}
</script>

<style scoped lang="less">
  .line-title{
    display: flex;
    line-height: 14px;
    height: 14px;
    .title{
      font-size: 14px;
      line-height: 14px;
      color: rgb(255,255,255);
      font-weight: 700;
    }
    .line{
      flex: 1;
      margin-top: 7px;
      height: 1px;
      transform: scaleY(0.33);
    }
  }
  .border-bottom-1px(@color){
    position: relative;
    &:after{
      content: '';
      display: block;
      width: 100%;
      position: absolute;
      height: 1px;
      left: 0;
      bottom: 0;
      background-color:@color;
      transform: scaleY(0.33);
    }
  }
</style>
