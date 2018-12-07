<template>
  <div class="foodControl" v-if="foods">
    <transition-group name="scroll">
      <span class="sub icon-remove_circle_outline" @click.stop="remove" v-if='foods.count&&foods.count>0' :key="1"></span >
      <span class="count" v-text="foods.count" v-if='foods.count&&foods.count>0' :key="2"></span>
    </transition-group>
    <span class="add icon-add_circle" @click.stop="add"></span>
  </div>
</template>

<script>
export default {
  props: {
    foods: Object
  },
  methods: {
    add () {
      if (!this.foods.count) {
        this.$set(this.foods, 'count', 0)
      }
      this.foods.count += 1
    },
    remove () {
      this.foods.count -= 1
    }
  }
}
</script>

<style scoped lang="less">
@import "../../common/less/iconfont";
.foodControl{
  font-size: 0;
  .scroll-enter,.scroll-leave-to{
    opacity: 0;
    transform: translateX(24px) rotate(180deg);
  }
  .scroll-enter-active,.scroll-leave-active{
    transition:  all .3s;
  }
  .sub,.add{
    display: inline-block;
    font-size: 24px;
    line-height: 24px;
    color: rgb(0,160,220);
    vertical-align: middle;
  }
  .count{
    display: inline-block;
    width: 24px;
    font-size: 10px;
    line-height: 24px;
    color: rgb(147,153,159);
    text-align: center;
    vertical-align: middle;
  }

}
</style>
