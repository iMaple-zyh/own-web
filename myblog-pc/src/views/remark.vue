<template>
  <div class="container">
    <div class="body-bg">
    <div class="blog">
      <div class="blog-title">
        <h3>{{ blog && blog.title }}</h3>
        <span>{{ blog && blog.post_time }}</span>
      </div>
      <div class="blog-content">{{ blog && blog.content }}</div>
      <div class="comments" v-for="item in (blog&&blog.comments)">
        <div class="comment">
          <div class="comment-content">{{item.comm_content}}</div>
          <div class="comment-info">
            <span class="userinfo">{{item.username}}</span>
            <span class="post-time">{{item.comm_post_time}}</span>
          </div>
        </div>
      </div>
    </div>
    <div>
        <h1 class="blog-remark">发表评论</h1>            
    <p>
      <textarea
        class="input"
        cols="50"
        rows="20"
        v-model="content"
        
      ></textarea>
    </p>
        <button @click="doRemark" class="btn">
           提交
        </button>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog: null,
      content:''
    };
  },
  created() {
    this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      let blogId = this.$route.params.blogId;
      
      this.$http
        .get("/blog/detail", {
          params: {
            blogId: blogId,           
          },
        })
        .then((res) => {
          let { state, blog } = res.data;
          if (state == "success") {
            this.blog = blog;
          }
        })
        // .catch((err) => {
        //   // alert('请求未授权-catch!');
        //   this.$router.push("/login");
        // });
    },
    doRemark(){
      let loginUser = this.$store.state.loginUser;
      let blogId = this.$route.params.blogId;
      if (loginUser) {
        this.$http
          .post("/blog/remark", {
            content: this.content,
            userId: loginUser.user_id,
            blogId: blogId
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              this.$router.push("/");
            } else {
              alert("发表评论失败!");
            }
          });
      }else{
          alert('当键盘侠也得先登录!');
          this.$router.push('/login');
      }
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
    background-image: url(../../images/17.jpg);
}
.blog {
  margin: 20px auto;
  padding: 20px;
    background-color:#346d6d;
  width: 60%;
  border-top: 2px solid #312E3D;   
  border-left: 2px solid #312E3D;   
  border-right: 2px solid #312E3D;   
  border-bottom: 2px solid #56536A;  
  border-radius: 5px; 
}
.input{
  padding: 20px;
   background-color: transparent;
    width: 60%;
   border-top: 2px solid #312E3D;   
    border-left: 2px solid #312E3D;   
    border-right: 2px solid #312E3D;   
    border-bottom: 2px solid #56536A;  
        border-radius: 5px; 
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
    left: 72%;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.comment {
  padding: 20px;
}
.comment-info {
  float: right;
}
.blog-remark{
  margin: 20px;
  color: #551A8B;
}
</style>