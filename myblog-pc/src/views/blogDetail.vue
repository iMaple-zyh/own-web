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
          <router-link :to="{ path: '/blog/detail/remark/' + blog.blog_id }">
             <h1>发表评论</h1>   
          </router-link>
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
</style>