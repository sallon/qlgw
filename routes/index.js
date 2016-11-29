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
  res.render('production',{title: '企力 | 您手边的办公利器 | 价格',isindex:false,flag:"production"})
})

module.exports = router;
