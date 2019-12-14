<template>
  <div class="container">
    <h2 class="title">—————— 推荐商家 ——————</h2>
    <no-login v-if="!$store.state.user.loginStatus" type="附近商家" class="no-login" />
    <section
      v-else
      v-for="item in merchantList"
      :key="item.id"
      class="store"
      @click="handleStore(item.id)"
    >
      <img :src="item.img" :alt="item.merchantName" />
      <div class="content">
        <h3>{{item.merchantName}}</h3>
        <p class="address">{{item.merchantAddress}}</p>
        <p class="phone">{{item.merchantPhone}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import getMerchantList from "@/service/getMerchantList.js";
import NoLogin from "@/components/NoLogin";

export default {
  data() {
    return {
      merchantList: []
    };
  },
  created() {
    getMerchantList().then(res => {
      // [{"id":"1196017480389206018","userId":"1195885412871065601","merchantName":"小象便当","merchantAddress":"广州大学城南亭村南亭村南亭商业街5号","merchantPhone":"5816855","img":"https://cube.elemecdn.com/0/52/d4cd8ce8f762169c0a52ef78eacfcjpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"},{"id":"1196017480389206019","userId":"1199948157683658754","merchantName":"贤哥","merchantAddress":"广州大学城南亭村南亭村南亭商业街5号","merchantPhone":"5821355","img":"https://cube.elemecdn.com/f/5a/225d06ebd294becf5854402f6b25cpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"},{"id":"1196017480389206020","userId":"1199949891277582337","merchantName":"重庆麻辣烫","merchantAddress":"广州大学城南亭村南亭村南亭商业街3号","merchantPhone":"1876855","img":"https://cube.elemecdn.com/d/c8/72dc45f36658568b45cf5d6839ecdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"},{"id":"1196017480389206021","userId":"1199949891277582334","merchantName":"一号鸡秘·火锅鸡","merchantAddress":"广州大学城南亭村南亭村南亭商业街10号","merchantPhone":"5738855","img":"https://cube.elemecdn.com/c/91/9eefa5b97af8872a5ffc9ea5fd3a9jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"},{"id":"1196017480389206022","userId":"1199949891277582354","merchantName":"喵喵烤肉饭(大学城店)","merchantAddress":"广州大学城南亭村南亭村南亭商业街15号","merchantPhone":"5116235","img":"https://cube.elemecdn.com/3/02/e06d3036c03d77d0902a7a9369058jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"},{"id":"1199949891247896547","userId":"1199949891277582356","merchantName":"粥品香坊（回龙观）","merchantAddress":"北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340","merchantPhone":"5147852","img":"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"}]
      this.merchantList = res.data.data.merchants;
    });
  },
  methods: {
    handleStore(id) {
      this.$router.push(`/merchant/${id}`);
    }
  },
  components: {
    NoLogin
  }
};
</script>

<style scoped lang="less">
.title {
  text-align: center;
  font-size: 15px;
  font-weight: normal;
  color: #5b5959;
}
.no-login {
  margin-top: 20px;
}
.store {
  padding: 5px 16px;

  img {
    float: left;
    width: 65px;
    height: 65px;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  .content {
    margin-left: 85px;
    margin-right: 15px;
    h3 {
      margin: 0;
      font-size: 15px;
    }
    p {
      padding-left: 5px;
      font-size: 11px;
    }
    .address {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>