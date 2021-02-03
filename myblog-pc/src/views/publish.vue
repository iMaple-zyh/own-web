<template>
  <div class="body-bg">
    <h1>发表文章</h1>
    <p><input type="text"  class="input" v-model="title" placeholder="            请输入标题    "></p>
    <p>
      <textarea
        style='font-size:18px'
        class="blog"
        cols="50"
        rows="20"
        v-model="content"
        placeholder="
        请输入博客内容"
      ></textarea>
    </p>
    <!-- <input type="hidden" value="5"> -->
    <p>
      <button @click="postBlog" class="btn">发表</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  created() {},
  methods: {
    postBlog() {
      let loginUser = this.$store.state.loginUser;
      if (loginUser) {
        this.$http
          .post("/blog/post", {
            title: this.title,
            content: this.content,
            userId: loginUser.user_id,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              this.$router.push("/");
            } else {
              alert("发表文章失败!");
            }
          });
      }else{
          alert('请先登录!');
          this.$router.push('/login');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input{
  width: 40%;
  height: 40px;
  border-radius: 5px; 
  margin-bottom: 20px;
  font-size: 30px;
  background-color: transparent;
}
.blog{
  width: 40%;
  border-radius: 5px;
  background-color: transparent;
}
.body-bg{
  position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: 100% 100%;
    background-image: url(../../images/18.jpg);
}
.btn{
    position: absolute;
    width: 140px;
    background-color: #4a77d4;   
    border: 1px solid #3762bc;   
    color: #fff;   
    padding: 9px 14px;   
    font-size: 15px;   
    line-height: normal;   
    border-radius: 5px;   
    margin: 5px ; 
    left: 60.7%;
}
</style>