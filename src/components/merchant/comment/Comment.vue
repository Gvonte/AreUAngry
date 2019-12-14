<template>
  <div class="comment">
    <section v-for="item in commentList" class="comment-content">
      <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt />
      <span class="time">item.</span>
      <h3>item.</h3>
      <p>item.</p>
      <span class="food"></span>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.comment {
  padding: 0 18px;
  .comment-content {
    padding: 18px 0;
    img {
      float: left;
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
    .time {
      float: right;
      font-size: 12px;
      color: #999;
    }
    h3 {
      margin: 0 0 4px 40px;
      font-size: 10px;
      color: #333;
    }
    p {
      margin: 0 0 8px 40px;
      font-size: 12px;
      color: #333;
    }
    .food {
      margin-right: 8px;
      margin-bottom: 4px;
      padding: 0 6px;
      border: 1px solid rgba(7, 17, 27, 0.1);
      border-radius: 1px;
      color: #999;
      font-size: 10px;
    }
  }
}
</style>