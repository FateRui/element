<template>
    <div class="goods" ref="goods">
      <div class="goods-warpper">
        <div class="menu" id="menu">
          <ul class="menu-warpper">
            <li class="menu-item" v-for="(item,index) in $store.state.goods" :key="index" :class="{active:selectIndex===index}">
              <div class="menu-contain">
                <bullentin-icon size=12 :type="item.type" v-if="item.type > 0" class="icon"></bullentin-icon><span v-text="item.name"></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="content" id="content">
          <ul class="content-warpper">
            <li v-for="(foodgroup, index) in  $store.state.goods" :key="index" v-if="foodgroup.foods" class="foodgroup">
              <h3 class="title" v-text="foodgroup.name"></h3>
              <ul v-for="(foodItem, index) in foodgroup.foods" :key="index">
                <li class="food-item">
                  <div class="food-warpper">
                    <div class="avatar">
                      <img :src="foodItem.icon" alt="">
                    </div>
                    <div class="food-content">
                      <h4 class="name" v-text="foodItem.name"></h4>
                      <p class="desc" v-text="foodItem.description" v-if="foodItem.description"></p>
                      <div class="sell-info">
                        <span class="count">月售{{foodItem.sellCount}}份</span><span>好评率{{foodItem.rating}}%</span>
                      </div>
                      <div class="price">
                        <span class="small">&yen;</span><span class="now">{{foodItem.price}}</span><del class="old" v-if="foodItem.oldPrice">&yen;{{foodItem.oldPrice}}</del>
                      </div>
                      <div class="foodControl-warpper">
                        <food-control :foods="foodItem"></food-control>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="shopCart-warpper" >
        <shop-cart :seller="seller" @toggle="showFoodList = !showFoodList"></shop-cart>
      </div>
      <transition name="collapse">
        <div class="shop-list" v-if="showFoodList">
          <div class="shop-cart">

          </div>
        </div>
      </transition>
    </div>
</template>
<script>
import shopCart from '../shopCart/shopCart'
import bullentinIcon from '../bullentinIcon/bullentinIcon'
import BtScroll from 'better-scroll'
import foodControl from '../foodControl/foodControl'
export default {
  components: { shopCart, bullentinIcon, foodControl },
  data () {
    return {
      selectIndex: 0,
      goods: [],
      showFoodList: false
    }
  },
  mounted () {
    this.$showLoading(this.$refs.goods)
    this.$axios.get('/api/goods').then((data) => {
      if (data.data.error === 0) {
        this.$store.commit('setGoods', data.data.data)
        this.$nextTick(() => {
          this._init_scroll()
          this.$hideLoading(this.$refs.goods)
        })
      }
    })
  },
  activated () {
    this._init_scroll()
  },
  methods: {
    _init_scroll () {
      if (!this.menu_scroll) {
        this.menu_scroll = new BtScroll('#menu', {
          click: true,
          scrollY: true
        })
      }
      if (!this.food_scroll) {
        this.food_scroll = new BtScroll('#content', {
          click: true,
          scrollY: true
        })
      }
    }
  },
  props: {
    seller: Object
  }
}
</script>

<style scoped lang="less">
.goods{
  position: absolute;
  top: 174px;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  .goods-warpper{
    flex: 1;
    display: flex;
    .menu{
      width: 80px;
      height: 100%;
      flex-direction: column;
      background: #f3f5f7;
      overflow: hidden;
      .menu-warpper{
        .menu-item{
          display: table;
          color: rgb(147,153,159);
          font-weight: 200;
          font-size: 12px;
          padding: 0 12px;
          &.active{
            background: #fff;
            color: rgb(7,17,27);
            font-weight: 700;
            transform:translateY(-1px);
            .menu-contain{
              .border-none;
            }
          }
          .menu-contain{
            .border-top-1px(rgba(7,17,27,.1));
            display: table-cell;
            vertical-align: middle;
            height: 54px;
            width: 56px;
            line-height: 14px;
            .icon{
              vertical-align: top;
            }
          }
        }
      }
    }
    .content{
      flex: 1;
      height: 100%;
      background: #fff;
      overflow: hidden;
      .foodgroup{
        .title{
          font-size: 12px;
          line-height: 26px;
          color:rgb(147,153,159);
          padding-left: 14px;
          background: #f3f5f7;
          border-left: 2px solid #d9dde1;
        }
        .food-item{
          .border-bottom-1px(rgba(7,17,27,.1));
          &:last-child{
            margin-bottom:0;
          }
          margin: 18px;
          .food-warpper{
            display: flex;
            .avatar{
              display: inline-block;
              width: 57px;
              height: 57px;
              img{
                width: 100%;
                height: 100%;
                border-radius: 2px;
              }
            }
            .food-content{
              position: relative;
              flex: 1;
              margin-left:10px;
              margin-bottom: 18px;
              .name{
                margin-top: 2px;
                font-size: 14px;
                line-height: 14px;
                color: rgb(7,17,27);
              }
              .desc{
                margin-top: 8px;
                font-size: 10px;
                line-height: 10px;
                color: rgb(147,153,159);
              }
              .sell-info{
                margin-top: 8px;
                font-size: 10px;
                line-height: 10px;
                color: rgb(147,153,159);
                span{
                  display: inline-block;
                  line-height: 10px;
                }
                .count{
                  margin-right: 12px;
                }
              }
              .price{
                .small, .old{
                  font-size: 10px;
                  line-height: 24px;
                  color: rgb(147,153,159);
                }
                .now{
                  font-size: 14px;
                  font-weight: 700;
                  line-height: 24px;
                  color: rgb(240,20,20);
                  margin-right: 8px;
                }
              }
              .foodControl-warpper{
                position: absolute;
                right: 0;
                bottom: 0;
              }
            }
          }
        }
      }
    }
  }
  .shopCart-warpper{
    height: 48px;
    width: 100%;
  }
  .shop-list{
    position: absolute;
    width: 100%;
    height: 200px;
    bottom: 48px;
    left: 0;
    z-index: 20;
    background: red;
  }
}
.collapse-enter,.collapse-leave-to{
  transform: translateY(100%);
}
.collapse-enter-active,.collapse-leave-active{
  transition:all .4s;
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
  &:after{
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
.border-none{
  &:after{
    display: none;
  }
}
</style>
