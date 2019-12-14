<template>
  <div class="container">
    <a class="detail" href="#" v-for="item in detailList" :key="item.title">
      <span class="title">{{item.title}}</span>
      <span class="content">
        {{item.content}}
        <i class="icon">></i>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailList: [
        { title: "常用信息", content: "经常使用的都在里面" },
        { title: "我的收藏", content: "收藏后静等降价通知" },
        { title: "浏览历史", content: "保留15天，随时可回看" },
        { title: "我要合作", content: "供应商加盟/代理合作" },
        { title: "买卖工具", content: "商品动态/翻译助手等" }
      ]
    };
  }
};
</script>

<style scope lang="less">
.detail {
  display: block;
  margin-bottom: 1px;
  background: #ffffff;

  .title {
    line-height: 46px;
    padding: 0 15px;
    font-size: 15px;
    color: #000;
  }

  .content {
    float: right;
    line-height: 46px;
    padding-right: 10px;
    font-size: 13px;
    color: #999999e6;

    .icon {
      padding-left: 10px;
      font-weight: bold;
      color: #777777;
    }
  }
}
</style>