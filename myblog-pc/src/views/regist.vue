<template>
<div class="body-bg">
    <div class="container">
        <div class="login-form">
            <h3>用户注册</h3> 
            <p>
                <input type="text" name="username" v-model="username" class="input1"  placeholder="用户名">
            </p>
            <p>
                <input type="password" name="password" v-model="password" class="input" placeholder="密码">
            </p>
            <p>
                <input type="text" name="nickname" v-model="nickname" class="input" placeholder="昵称">
            </p>
            <p>
                <button @click="doRegist" class="btn">注册</button>
            </p>
        </div>
    </div>
</div>    
</template>
<script>
export default {
    data(){
        return{
            username:"",
            password:"",
            nickname:"",
            };
    },
    methods:{
        doRegist(){
            this.$http.post("/user/post",{
                username:this.username,
                password:this.password,
                nickname:this.nickname,
            })
            .then((res)=>{
                let {state}=res.data;
                if(state=="success"){
                    this.$router.push("/login");
                }else{
                    alert("注册失败!");
                }
            })
        }
    }
}
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
.login-form h3{
    font-size: 2em;    
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
.input1 {
   width: 278px;   
    height: 15px;   
    margin-bottom: 5px;
    margin-top: 40px;   
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
 .login-form {
  position: absolute;   
    top: 50%;   
    left:45%;   
    margin: -150px -100px -100px -150px;   
    width: 500px;   
    height: 300px;
    background-size: 100%;
}
.login-form p {
  padding: 8px 0;
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