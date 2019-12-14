<template>
  <div class="store">
    <go-back></go-back>
    <merchant-header :merchantId="merchantId" class="header" />
    <van-tabs v-model="active" swipeable line-width="33%" line-height="2px">
      <van-tab class="tabs" v-for="(item,index) in tabData" :key="index">
        <div slot="title">
          <span class="title">{{item.name}}</span>
        </div>
        <component :is="item.component" :merchantId="merchantId" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import GoBack from "@/components/goback/GoBack";
import MerchantHeader from "@/components/merchant/MerchantHeader";
import { Tab, Tabs } from "vant";
import Goods from "@/components/merchant/goods/Goods.vue";
import Comment from "@/components/merchant/comment/Comment.vue";
import Detail from "@/components/merchant/detail/Detail.vue";

export default {
  props: ["merchantId"],
  data() {
    return {
      active: 0,
      tabData: [
        { name: "商品", component: Goods },
        { name: "评论", component: Comment },
        { name: "商家", component: Detail }
      ]
    };
  },
  components: {
    GoBack,
    MerchantHeader,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  }
};
</script>

<style scoped lang="less">
.store {
  .header {
    margin-top: 44px;
  }
  .title {
    font-size: 16px;
  }
}
</style>
