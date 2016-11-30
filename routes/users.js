var express = require('express');
var router = express.Router();
var userDao = require("../dao/userDao")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/login',{title:"登录企力官网控制台"});
});

// 查询用户
router.get('/findUser', function(req, res, next) {
  console.log("test success")
  userDao.find(req, res, next);
  // res.send("sallon")
});
router.get('/findAll', function(req, res, next) {
  console.log("test success")
  userDao.findAll(req, res, next);
  // res.send("sallon")
});
router.get('/index',function(req,res,next){
  res.render('admin/index',{title:"官网管理"})
})

module.exports = router;
