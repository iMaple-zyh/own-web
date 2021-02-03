<template>
<div class="body-bg">
    <div class="container">
        <div class="login-form">
            <h3>用户登录</h3>
            <p>
                <input type="text" name="username" v-model="username" placeholder="用户名" class="input">
            </p>
            <p>
                <input type="password" name="password" v-model="password" placeholder="密码" class="input">
            </p>
            <p>
                <button @click="doLogin" class="btn">登录</button>
                <button class="btn">
                  <router-link to="./regist">注册</router-link>
                </button>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    doLogin() {
      this.$http
        .post("/user/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
            let {state, token, user} = res.data;
          if (state == "success") {
            //   登录成功
            // 存登录用户信息
            this.$store.commit('storeLoginUser', user);
            // 存储token
            this.$store.dispatch('setToken', token)
            this.$router.push('/');
          } else {
            //   登录失败
            alert('用户名或密码不正确!');
          }
        });
    },
  },
};
</script>

<style scoped>
.body-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: 100% 100%;
    background-image: url(../../images/2.jpg);
}
.login-form {
    position: absolute;   
    top: 50%;   
    left:45%;   
    margin: -150px -100px -100px -150px;   
    width: 500px;   
    height: 300px;
    background-size: 100%;
}
.login-form h3{
    font-size: 2em;   
    margin: 0.67em 0;  
}
.input {
    width: 278px;   
    height: 18px;   
    margin-bottom: 5px;   
    outline: none;   
    padding: 10px;   
    font-size: 13px;   
    color: #000;   
    text-shadow:1px 1px 1px;   
    border-top: 1px solid #312E3D;   
    border-left: 1px solid #312E3D;   
    border-right: 1px solid #312E3D;   
    border-bottom: 1px solid #56536A;   
    border-radius: 4px;   
    background-color: #fff;  
}
.btn {
    width: 140px;
    background-color: #4a77d4;   
    border: 1px solid #3762bc;   
    color: #fff;   
    padding: 9px 14px;   
    font-size: 15px;   
    line-height: normal;   
    border-radius: 5px;   
    margin: 5px ;   
}
</style>