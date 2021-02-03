const router = require("koa-router")();
const blog = require('../controllers/blogControllers')
const { verifyToken } = require("../auth");

router.prefix("/blog");

router.get("/list",  blog.listBlog);

router.get("/detail", blog.detailBlog);

router.post('/post', blog.postBlog);

router.post('/remark',blog.postRemark);

module.exports = router;