<template>
  <div class="login">
    <go-back></go-back>
    <login-form :type="type" />
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm";
import GoBack from '@/components/goback/GoBack'

export default {
  props: ["type"],
  components: {
    LoginForm,
    GoBack
  }
};
</script>

<style scoped lang="less">
.login {
  margin: 50% 15px 0 15px;
}
</style>