<template>
  <div class="all">
    <div class="body-bg">
    <div class="sit-header">
				<div class="top-header">
					<div class="container">
						<a id="branding">
							<img src="../../images/5.png" alt="Company Name" class="logo">
							<div class="logo-text">
								<h1 class="site-title">iMaple 工作室</h1>
								<small class="description">梦开始的地方</small>
							</div>
              <div class="menu">
                 <button @click="goHome" class="self" >我的主页</button>
              </div>
						</a> <!-- #branding -->
					</div> <!-- .container -->
				</div> <!-- .top-header -->
        <button @click="goPostBlog" class="mbtn postblog" type="success"> 发表文章</button>
        <button @click="goLogin" class="mbtn" type="success">登录</button>
        <button @click="goregist" class="mbtn" type="success">注册</button>
    <div class="right-section pull-right">
							<a href="#" class="phone"><img src="../../images/icon-phone.png" class="icon">+1 850 418 6900</a>
					
							<form action="#" class="search-form">
								<input type="text" placeholder="Search..." class="input">
								<button @click="search" type="submit"><img src="../../images/icon-search.png" alt=""></button>
							</form>
						</div>
          </div>
    <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blog_id">
        <h3 class="blog-title">
          <!-- <a href="/blog/detail/">{{item.title}}</a> -->
          <router-link :to="{ path: '/blog/detail/' + item.blog_id }">{{
            item.title
          }}</router-link>
        </h3>
        <p class="blog-content">{{ item.content }}</p>
        <span class="post-time">{{ item.postTime }}</span>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    search(){
        this.$router.push('/search/');
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
    goHome(){
      let loginUser = this.$store.state.loginUser;
      if (loginUser) {
        this.$router.push('/Home/'+loginUser.user_id);
      }else{
          alert('请先登录!');
          this.$router.push('/login');
      }
    },
    goPostBlog(){
      this.$router.push("/blog/post");
    },
    goLogin(){
      this.$router.push("/login");
    },
    goregist(){
      this.$router.push("/regist");
    }
  },
};
</script>

<style scoped>
.body-bg{
    position:relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: 100% 100%;
    background-image: url(../../images/7.jpg);
}
.site-header .top-header {
  padding: 30px 0; }
.site-header .bottom-header {
  background-color: #4a4c4e;
  *zoom: 1;
  padding: 20px 0; }
  .site-header .bottom-header:after {
    content: " ";
    clear: both;
    display: block;
    overflow: hidden;
    height: 0; }
  @media screen and (max-width: 640px) {
    .site-header .bottom-header .social-links {
      display: none; } }

#branding {
  float: left; }
  #branding .logo, #branding .logo-text {
    display: inline-block;
    vertical-align: middle; }
  #branding .logo {
    margin-right: 10px; }
  #branding .site-title {
    margin-bottom: 0;
    font-size: 20px;
    font-size: 1.25em; }
    #branding .site-title a {
      color: #768089; }
.self{
  text-emphasis-color: #000;
  width: 100px;  
  padding:8px;  
  background-color: #349e19;  
  border-color: #396e42;  
  color: #fff;  
  -moz-border-radius: 10px;  
  -webkit-border-radius: 10px;  
  border-radius: 10px; /* future proofing */  
  -khtml-border-radius: 10px; /* for old Konqueror browsers */  
  text-align: center;  
  vertical-align: middle;  
  border: 1px solid transparent;  
  font-weight: 900;  
  font-size:125%;
  display: inline-block;
  margin-top: 20px;
  margin-right: 3px;
}
h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.blog-list {
  position: relative;
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
.blog-content{
  color: #000;
}
.post-time {
  margin: 20px 0;
}
.mbtn{
  text-emphasis-color: #000;
  width: 200px;  
  padding:8px;  
  background-color: #55e21d;  
  border-color: #396e42;  
  color: #fff;  
  -moz-border-radius: 10px;  
  -webkit-border-radius: 10px;  
  border-radius: 10px; /* future proofing */  
  -khtml-border-radius: 10px; /* for old Konqueror browsers */  
  text-align: center;  
  vertical-align: middle;  
  border: 1px solid transparent;  
  font-weight: 900;  
  font-size:125%;
  display: inline-block;
  margin-top: 20px;
  margin-right: 3px;
}
.postblog{
    margin-left: 62px;
}
.right-section .phone, .right-section .search-form {
  display: inline-block;
  vertical-align: middle;
  position: relative; }
.right-section .phone img {
  vertical-align: middle; }
.right-section .search-form {
  margin: 10px 0;
  margin-left: 20px; }
  @media screen and (max-width: 480px) {
.right-section .search-form {
      display: none; } }
  .right-section .search-form input {
    padding-right: 40px; }
  .right-section .search-form button {
    position: absolute;
    right: 0;
    top: 0;
    background: none; }
.pull-right{
  float: right;
} 
.input {
    text-rendering: auto;
    padding: 10px 40px 10px 10px;
    height: 41.2px;
    width: 216.8px;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
.button, form input[type="submit"], form button, form input[type="reset"] {
    border: none;
    color: white;
    background: #0f75bd;
    padding: 10px;
    border-radius: 3px;
    display: inline-block;
    -webkit-transition: .3s ease;
    transition: .3s ease;
}
</style>