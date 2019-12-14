<template>
  <div class="container">
    <h1 class="title">你饿么</h1>
    <van-search
      class="search"
      v-model="value"
      placeholder="请输入搜索关键词"
      shape="round"
      @search="onSearch"
    />
  </div>
</template>

<script>
import { Search } from "vant";

export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {}
  },
  components: {
    [Search.name]: Search
  }
};
</script>

<style scoped lang="less">
.title {
  text-indent: 15px;
  font-size: 17px;
  color: #2e2c2c;
}
.search {
  padding: 0;
  .van-search__content {
    background-color: #f1f1f1;
  }
}
</style>