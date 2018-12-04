<template>
    <div class="goods">
      <div class="menu">
        <div class="menu-warpper">
        </div>
      </div>
      <div class="content">
        <div class="content-warpper">
        </div>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
  .goods{
    position: absolute;
    top: 174px;
    bottom: 48px;
    width: 100%;
    background: aliceblue;
    display: flex;
    .menu{
      width: 80px;
      height: 100%;
      background: red;
    }
    .content{
      flex: 1;
      height: 100%;
      background: purple;
    }
  }
</style>
