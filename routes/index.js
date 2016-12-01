var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: '企力 | 您手边的办公利器', isindex:true ,flag:"index"});
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: '企力 | 您手边的办公利器', isindex:true ,flag:"index"});
});

router.get('/about',function(req,res,next){
  res.render('about',{title: '企力 | 您手边的办公利器 | 联系我们',isindex:false,flag:"about"})
})

router.get('/price',function(req,res,next){
  res.render('price',{title: '企力 | 您手边的办公利器 | 价格',isindex:false,flag:"price"})
})

router.get('/production',function(req,res,next){
  res.render('production',{title: '企力 | 您手边的办公利器 | 产品',isindex:false,flag:"production"})
})
router.get('/case',function(req,res,next){
  res.render('case',{title: '企力 | 您手边的办公利器 | 案例',isindex:false,flag:"case"})
})
router.get('/stemp',function(req,res,next){
  res.render('stemp',{title: '企力 | 您手边的办公利器 | 服务步骤',isindex:false,flag:""})
})
router.get('/better',function(req,res,next){
  res.render('better',{title: '企力 | 您手边的办公利器 | 产品优势',isindex:false,flag:""})
})
router.get('/layer',function(req,res,next){
  res.render('layer',{title: '企力 | 您手边的办公利器 | 服务协议',isindex:false,flag:""})
})
router.get('/help',function(req,res,next){
  res.render('help',{title: '企力 | 您手边的办公利器 | 技术支持',isindex:false,flag:""})
})

module.exports = router;
