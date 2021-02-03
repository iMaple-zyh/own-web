<template>
  <div class="body-bg">
    <div class="pull-right">
      <h4>尊敬的：{{nickname}}</h4>
      
    </div>
    <div class="pull-left">
      <h4>您发表的文章:</h4>
    </div>
      <div class="blog-list">
          <div class="blog" v-for="item in blogList" :key="item.blog_id">
        <h3 class="blog-title" v-if="userId==item.user_id">
          <!-- <a href="/blog/detail/">{{item.title}}</a> -->
          <router-link :to="{ path: '/blog/detail/' + item.blog_id }">{{item.title}}</router-link>
        </h3>
        <p  class="blog-content" v-if="userId==item.user_id">{{ item.content }}</p>
        <span  class="post-time" v-if="userId==item.user_id">{{ item.postTime }}</span>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userId:'',
      nickname:'',
      blogList: []
    }
  },
     created() {
    this.getData();
    this.getuserID();
  },
   methods: {
       getuserID(){
           let loginUser = this.$store.state.loginUser;
           this.userId = loginUser.user_id
           this.nickname = loginUser.nickname
           console.log(this.userId)
           console.log(this.nickname)
       },
       getData() {          
       this.$http
        .get("/blog/list")
        .then((res) => {
          let { state } = res.data;
          if (state == "auth-fail") {
            alert("请求未授权-then!");
          } else if (state == "success") {
            let { blogs } = res.data;
            this.blogList = blogs;
          }
        });
    },
   }
}
</script>

<style>
.body-bg{
   position:relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: 100% 100%;
    background-image: url(../../images/6.jpg);
}
.blog-list {
  width: 500px;
  margin: 20px auto;
  border-radius: 10px;
}
.blog {
  background-size: 100% 100%;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
    border-top: 2px solid #312E3D;   
  border-left: 2px solid #312E3D;   
  border-right: 2px solid #312E3D;   
  border-bottom: 2px solid #56536A;  
}

.blog-title{
  text-align: left;
  text-emphasis-color: #000;
}
.pull-right{
  float: right;
}
.pull-left{
  position: relative;
  float: left;
  left: 20%;
}
</style>