<template>
    <span :class="elClass" class="bullentinIcon"></span>
</template>

<script>
let classList = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
export default {
  props: {
    size: {
      type: String,
      default: '12'
    },
    type: {
      type: Number
    }
  },
  computed: {
    elClass () {
      return 'size' + this.size + ' ' + classList[this.type]
    }
  }
}
</script>

<style scoped lang="less">
  .bullentinIcon{
    display: inline-block;
    background-repeat: no-repeat;
    &.size12{
      .bg_size(12px,12px)
    }
    &.size16{
      .bg_size(16px,16px)
    }
    &.size24{
      .bg_size(24px,24px)
    }
    &.decrease{
      .bg_img('decrease')
    }
    &.discount{
      .bg_img('discount')
    }
    &.guarantee{
      .bg_img('guarantee')
    }
    &.invoice{
      .bg_img('invoice')
    }
    &.special{
      .bg_img('special')
    }
  }
  .bg_size(@w,@h){
    width: @w;
    height: @h;
    background-size: @w @h;
  }
  .bg_img(@img){
    background-image: url('@{img}_2@2x.png');
    @media (-webkit-max-device-pixel-ratio: 3),(max-device-pixel-ratio: 3){
      background-image: url('@{img}_2@3x.png');
    }
  }
</style>
