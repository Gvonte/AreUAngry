<template>
  <div class="container">
    <van-cell-group>
      <van-field
        v-model="username"
        size="large"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
        :error-message="nameMsg"
        @blur="handleName"
        @input="handleName"
      />
      <van-field
        v-model="password"
        size="large"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        clearable
        :error-message="pswMsg"
        @blur="handlePsw"
        @input="handlePsw"
      />
      <van-button round type="info" class="btn" @click="handlebtn">{{type==='1'?'登录':'注册'}}</van-button>
      <span @click="toRegister" v-if="type==='1'" class="to-register">
        没有账户，
        <span class="underline">立即注册</span>
      </span>
    </van-cell-group>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Button, Field, Cell, CellGroup, Toast } from "vant";
import register from "@/service/register.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      nameMsg: "",
      pswMsg: ""
    };
  },
  props: ["type"],
  watch: {
    $route() {
      // 动态路由切换不会重新渲染组件，会保留数据，所以要监听$route，变化的时候就要赋初值
      this.username = "";
      this.password = "";
      this.nameMsg = "";
      this.pswMsg = "";
    }
  },
  methods: {
    ...mapActions(["login"]),
    handleName() {
      if (this.type === "0") {
        this.nameMsg = /^([a-z|A-Z|0-9]{10,32})$/.test(this.username)
          ? ""
          : "用户名格式错误";
      } else {
        this.nameMsg = this.username ? "" : "请输入用户名";
      }
    },
    handlePsw() {
      if (this.type === "0") {
        this.pswMsg = /^([a-z|A-Z|0-9]{10,32})$/.test(this.password)
          ? ""
          : "密码格式错误";
      } else {
        this.pswMsg = this.password ? "" : "请输入密码";
      }
    },
    handlebtn() {
      this.handleName();
      this.handlePsw();
      if (this.nameMsg || this.pswMsg) {
        return;
      }
      let loginInfo = {
        username: this.username,
        password: this.password
      };
      if (this.type === "1") {
        this.login(loginInfo).then(res => {
          if (res.data.success) {
            this.$router.push(this.$route.query.redirect || "/");
          } else {
            Toast.fail("登陆失败");
          }
        });
      } else {
        loginInfo["role"] = false;
        register(loginInfo).then(res => {
          if (res.data.success) {
            this.$router.push("/login/1");
          } else {
            Toast.fail("注册失败");
          }
        });
      }
    },
    toRegister() {
      this.$router.push("/login/0");
    }
  },
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Toast.name]: Toast
  }
};
</script>

<style scoped lang="less">
.btn {
  margin-top: 10px;
  width: 100%;
}
.to-register {
  margin-left: 20px;
  font-size: 14px;
  .underline {
    color: #4688f1;
  }
}
</style>