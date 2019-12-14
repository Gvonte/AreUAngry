<template>
  <div class="user">
    <user-header />
    <user-operation />
  </div>
</template>

<script>
import UserHeader from "@/components/user/UserHeader";
import UserOperation from "@/components/user/UserOperation";

export default {
  name: "user",
  components: {
    UserHeader,
    UserOperation
  }
};
</script>

<style scoped lang="less">
</style>