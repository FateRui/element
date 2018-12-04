<template>
    <div class="split"></div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
  .split{
    width: 100%;
    height: 16px;
    background: #f3f5f7;
    .border-top-1px(rgba(7,17,27,.1));
    .border-bottom-1px(rgba(7,17,27,.1));
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
  .border-top-1px(@color){
    position: relative;
    &:before{
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      top: 0;
      background-color: @color;
      transform: scaleY(0.33);
    }
  }
</style>
