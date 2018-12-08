<template>
 <transition name="fade">
   <div class="loading" v-if="show" @click.stop="">
     <img src="./loading.gif" alt="">
   </div>
 </transition>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
  .fade-enter,.fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active,.fade-leave-active{
    transition: all .4s;
    opacity: 1;
  }
  .loading{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    background: rgba(255,255,255,.2);
    z-index: 1000;
  }
  .loading img{
    width: 32px;
    height: 32px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
