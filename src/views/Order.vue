<template>
  <div class="container">
    <no-login v-if="!status" type="外卖订单" class="no-login" />
    <div v-else>
      <h2>我的订单</h2>
      <div class="order" v-for="item in orderList" :key="item.orderId">
        <img :src="item.img" alt />
        <span class="status">订单已送达</span>
        <p class="store">黑帮教父></p>
        <p class="time">2019-11-12 10:37</p>
        <p class="food">我与死亡同行-大份</p>
        <span class="price">￥9999.99</span>
        <!-- <van-button plain type="primary">去评价</van-button> -->
        <!-- <van-button plain type="info">去支付</van-button> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { Button } from "vant";
import { mapState } from "vuex";
import NoLogin from "../components/NoLogin";
import getOrderList from "@/service/getOrderList.js";

export default {
  name: "order",
  data() {
    return {
      orderList: []
    };
  },
  created() {
    getOrderList(this.info.id).then(res => {
      if (res.data.success) {
        this.orderList = res.data.data.list;
      }
    });
  },
  computed: {
    ...mapState({
      info: state => state.user.userInfo,
      status: state => state.user.loginStatus
    })
  },
  components: {
    NoLogin,
    // [Button.name]: Button
  }
};
</script>

<style scoped lang="less">
.container {
  position: fixed;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  overflow: auto;
  &::-webkit-scrollbar {
    // 隐藏滚动条
    display: none;
  }
  .no-login {
    padding-top: 50%;
    background-color: white;
  }
  h2 {
    margin: 0;
    padding-top: 10px;
    font-size: 20px;
    text-indent: 30px;
  }
  .order {
    margin: 10px;
    padding: 15px 15px 0 15px;
    border-radius: 5px;
    background-color: white;
    img {
      float: left;
      width: 32px;
      height: 32px;
      border-radius: 3px;
    }
    p {
      margin: 0 0 0 42px;
      &.store {
        font-size: 16px;
        font-weight: bold;
        color: #333;
      }
      &.time {
        margin-top: 8px;
        margin-bottom: 12px;
        font-size: 11px;
        color: #999;
      }
      &.food {
        padding: 15px 0;
        border-top: 1px solid #eee;
        font-size: 13px;
        color: #666;
      }
    }
    span {
      float: right;
      font-size: 13px;
      color: #333;
      &.status {
        margin-top: 1px;
        margin-right: 10px;
      }
      &.price {
        margin-top: -31px;
        margin-right: 10px;
        font-weight: bold;
      }
    }
  }
}
</style>