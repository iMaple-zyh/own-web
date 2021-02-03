const router = require('koa-router')()
const user = require('../controllers/userControllers');

router.prefix('/user')

router.post('/login', user.login);

router.post('/post', user.postUser);

// router.get('/list', ...);

module.exports = router