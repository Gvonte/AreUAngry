<template>
  <div class="container">
    <div class="left">
      <ul>
        <li
          v-for="item in typeList"
          :key="item"
          @click="handleType(item);"
          :class="{'active': clickLI===item}"
        >
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="right" @scroll="scrollFoods" ref="right">
      <h2 class="title" ref="title">{{goodsList[0]&&goodsList[0].name}}</h2>
      <div v-for="good in goodsList" :key="good.name">
        <h2 :ref="good.name">{{good.name}}</h2>
        <div v-for="food in good.foods" :key="food.name" class="food">
          <img :src="food.icon" :alt="food.name" />
          <h3>{{food.name}}</h3>
          <p
            class="description"
          >{{food.description || '我是一串描述文字我是一串描述文字我是一串描述文字我是一串描述文字我是一串描述文字我是一串描述文字我是一串描述文字我是一串描述文字我是一串描述文字我是一串描述文字我是一串描述文字'}}</p>
          <p>
            <span class="price">￥{{food.price}}</span>
            <span class="old-price">￥{{(Number(food.price)*1.2).toFixed(0)}}</span>
          </p>
          <Stepper
            class="stepper"
            :food="food"
            :drop="true"
            :merchantId="merchantId"
            :num="(cart.find(i=>i.name===food.name)&&cart.find(i=>i.name===food.name).count)||0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getGoodsList from "@/service/getGoodsList.js";
import { Icon } from "vant";
import { mapState } from "vuex";
import Stepper from "./Stepper";

export default {
  data() {
    return {
      goodsList: [],
      typeList: [],
      positionInfoList: [],
      clickLI: ""
    };
  },
  computed: {
    ...mapState({
      carts: state => state.cart.carts
    }),
    cart() {
      let cart = this.carts.find(item => item.id === this.merchantId);
      return cart ? cart.cart : [];
    }
  },
  props: ["merchantId"],
  created() {
    // 初始获取title的left、top值
    getGoodsList(this.merchantId).then(res => {
      this.goodsList = res.data.data;
      this.typeList = res.data.data.map(item => item.name);
      this.clickLI = res.data.data[0].name;
      const { left, top } = this.offsetLAndT(this.$refs.title);
      this.titleLeft = left;
      this.titleTop = top;
      // 放在这里最适合
      this.$nextTick(() => {
        Object.keys(this.$refs).forEach(key => {
          if (key !== "right" && key !== "title") {
            const item = this.$refs[key][0];
            this.positionInfoList.push(item.offsetTop);
          }
        });
      });
    });
  },
  mounted() {
    // 直接用nextTick也得不到$refs，只能通过watch监控获取
    this.$nextTick(() => {
      // console.log(this.$refs); //{}, 空对象
    });
  },
  watch: {
    // 只能用watch深度监控$data或者监控data中的某个异步请求数据，该数据变化说明数据请求到了，然后下次会重新渲染，然后加上nextTick，在下次渲染的时候获取到$refs就可以了
    // 并且用异步请求的数据，该数据只会变化一次，所以nextTick只会执行一次
    goodsList: {
      // 不能用箭头函数定义watch函数，否则this指向有问题
      handler: function() {
        // this.$nextTick(() => {
        //   Object.keys(this.$refs).forEach(key => {
        //     if (key !== "right" && key !== "title") {
        //       const item = this.$refs[key][0];
        //       this.positionInfoList.push(item.offsetTop);
        //     }
        //   });
        // });
      },
      deep: true
    }
  },
  methods: {
    handleType(type) {
      /* this.$refs.right.scrollTop = this.positionInfoList[
        this.typeList.indexOf(type)
      ]; */
      let begin = this.$refs.right.scrollTop,
        final = this.positionInfoList[this.typeList.indexOf(type)];
      let step = (final - begin) / 8;

      let render = () => {
        begin += step; //修改图像的位置
        this.$refs.right.scrollTop = begin;
        if (Math.abs(begin - final) > 2) {
          window.requestAnimationFrame(render);
        } else {
          this.$refs.right.scrollTop = final;
        }
      };
      window.requestAnimationFrame(render);
      this.clickLI = type;
    },
    scrollFoods(e) {
      const scrollTop = Math.ceil(e.target.scrollTop); //当前滚动的距离，取整为了消除非常小的像素误差
      const scrollAry = this.positionInfoList; //之前存储的滚动区间
      const typeAry = this.typeList;
      // console.log(scrollAry);
      // [0, 1086, 1234, 1382, 1738, 1991, 2243, 2600, 3165]
      const index = scrollAry.findIndex(
        (item, index) =>
          item <= scrollTop &&
          (scrollAry[index + 1] ? scrollAry[index + 1] > scrollTop : true)
      ); //从当前滚动距离的所属滚动区间得出所属栏目索引
      const h = this.$refs[typeAry[0]][0].offsetHeight; //获取标题的高度
      if (!scrollAry[index + 1] || scrollAry[index + 1] - scrollTop > h) {
        this.$refs["title"].style.position = "fixed";
        this.$refs["title"].style.top = this.titleTop + "px";
        this.$refs["title"].style.left = this.titleLeft + "px";
        this.$refs["title"].innerHTML = typeAry[index];
      } else {
        this.$refs["title"].style.position = "absolute";
        this.$refs["title"].style.top = scrollAry[index + 1] - h + "px";
        this.$refs["title"].style.left = "0";
      }
    },
    offsetLAndT(el) {
      let left = 0;
      let top = 0;
      while (el) {
        left += el.offsetLeft;
        top += el.offsetTop;
        el = el.offsetParent;
      }
      return { left, top };
    }
  },
  components: {
    [Icon.name]: Icon,
    Stepper
  }
};
</script>

<style scoped lang="less">
// 添加了scoped属性的组件，为了达到组件样式模块化，做了两个处理：
// 1. 给HTML的DOM节点加一个不重复data属性(形如：data-v-19fca230)来表示他的唯一性
// 2.在每句css选择器的末尾（编译后的生成的css语句）加一个当前组件的data属性选择器（如[data-v-2311c06a]）来私有化样式

.container {
  // 当需要改元素铺满整个手机屏幕时，需要设置为fixed，然后bottom:0
  position: fixed;
  top: 232px;
  left: 0;
  right: 0;
  bottom: 50px;
  font-size: 0; //去除inline-block的影响
  overflow: hidden;

  .left {
    display: inline-block;
    width: 80px;
    height: 100%;
    font-size: 12px;
    // overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      // 隐藏滚动条
      display: none;
    }

    li {
      /* 
       * 多行垂直居中方法：
       * 对子元素设置display:inline-block，模拟成单行文本，并设置vertical-align:middle
       * 父元素设置height和line-height。
       * 最后对子元素添加line-height属性，覆盖继承自父元素的行高
       */
      height: 56px;
      line-height: 56px;
      padding: 0 10px;
      text-align: center;
      background-color: #f3f5f7;

      span {
        display: inline-block;
        line-height: 20px;
        vertical-align: middle;
      }

      &.active {
        background-color: white;
      }
    }
  }
  .right {
    position: relative;
    float: right;
    width: 295px;
    height: 100%;
    font-size: 12px;
    overflow-y: auto;

    transition: all 0.5s;

    &::-webkit-scrollbar {
      // 隐藏滚动条
      display: none;
    }

    .title {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      margin: 0;
      width: 100%;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      text-indent: 14px;
      color: #666;
      background: #f3f5f7;
    }
    h2 {
      margin: 0;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      text-indent: 14px;
      color: #666;
      background: #f3f5f7;
    }
    .food {
      position: relative;
      margin: 18px;
      padding-bottom: 5px;

      img {
        float: left;
        width: 57px;
        height: 57px;
      }
      h3 {
        margin: 0 0 0 67px;
        color: #333;
        font-size: 14px;
        font-weight: normal;
      }
      p {
        margin: 10px 0 10px 67px;
        color: #999;
        font-size: 10px;
        &.description {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      .price {
        color: #f01414;
        font-size: 14px;
      }
      .old-price {
        margin-left: 5px;
        text-decoration: line-through;
      }
      .stepper {
        position: absolute;
        top: auto;
        bottom: 0;
        left: auto;
        right: 0;
        font-size: 12px;
      }
    }
  }
}
</style>