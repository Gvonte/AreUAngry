<template>
  <div class="header">
    <div class="top">
      <img :src="merchantData.img" />
      <div class="word">
        <i class="brand"></i>
        <span class="name">{{merchantData.merchantName}}</span>
        <span class="phone">{{`Tel：${merchantData.merchantPhone}`}}</span>
        <p class="text">{{merchantData.merchantAddress}}</p>
      </div>
    </div>
    <div class="bottom">
      <i class="bulletin-title"></i>
      <span class="rightArrow">></span>
      <span class="bulletin-text">{{merchantData.bulletin}}</span>
    </div>
    <!-- 图片设置定位与z-index: -1，用作背景图片 -->
    <img :src="merchantData.img" width="100%" height="100%" class="back" />
  </div>
</template>

<script>
import getMerchantInfo from "@/service/getMerchantInfo.js";

export default {
  props: ["merchantId"],
  data() {
    return {
      merchantData: {}
    };
  },
  created() {
    getMerchantInfo(this.merchantId).then(res => {
      this.merchantData = res.data.data.merchant;
    });
  }
};
</script>

<style scoped lang="less">
.header {
  position: relative;
  background: rgba(7, 17, 27, 0.5);
  color: white;
  overflow: hidden;

  .top {
    height: 64px;
    padding: 24px;
    img {
      float: left;
      width: 64px;
      height: 64px;
    }
    /* 布局方式：先固定主体文字，给两边留空间设定float，图片浮动到左边，.count浮动到右边
   如果浮动被挤开可以设置margin-top为负值重新回去，如：.count */
    .word {
      margin-left: 80px;
      /* cube-ui中字体大小默认全部100%，导致div的fontsize为100px，产生布局错误，所以需要给默认值 */
      font-size: 16px;
      .brand {
        display: inline-block;
        margin-right: 7px;
        width: 35px;
        height: 21px;
        background-image: url("../../assets/images/brand@2x.png");
        background-size: 100% 100%;
        vertical-align: middle;
      }
      .name {
        font-weight: bold;
      }
      .text {
        margin-top: 20px;
        margin-left: 5px;
        width: 240px;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .phone {
      float: right;
      padding: 0 9px;
      line-height: 28px;
      border-radius: 10px;
      font-size: 12px;
      background: rgba(7, 17, 27, 0.2);
    }
  }

  .bottom {
    padding: 9px;
    background: rgba(7, 17, 27, 0.2);

    .bulletin-title {
      float: left;
      margin-right: 5px;
      width: 26px;
      height: 14px;
      background-image: url("../../assets/images/bulletin@2x.png");
      background-size: 100% 100%;
    }
    .bulletin-text {
      line-height: 14px;
      font-size: 12px;
      /* 多行文本省略... （5句） */
      overflow: hidden;
      text-overflow: ellipsis;
      /* -webkit-box会被float占位（-webkit-box布局比较特殊，原理不明） */
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .rightArrow {
      float: right;
      font-size: 10px;
    }
  }

  .back {
    position: absolute;
    top: 0;
    z-index: -1;
    filter: blur(10px);
  }
}
</style>

