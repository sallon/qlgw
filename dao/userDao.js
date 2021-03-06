/**
 * Created by yubo on 2016/11/29.
 */
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../config/db');
var $util = require('../util/util');
var $sql = require('./userSqlMapping');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        console.log(ret);
        res.json(ret);
    }
};

module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.body || req.body;
            // 建立连接，向表中插入值
            // console.log(param)
            // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
            var time = new Date();
            // id, companyName,userName,telphone,position,description, email,' +
            // ' createdtime,creator,modifiedtime,modifier,domainid,is_delete
            var id= time.getTime()+parseInt(Math.random()*1000);
            connection.query($sql.insert, [id,param.companyName, param.userName, param.telphone, param.position, param.description,param.email, time,"",time,"","",""], function(err, result) {
                console.log(err)
                if(result) {
                    result = {
                        code: 200,
                        msg:'增加成功'
                    };
                }
                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);
                // 释放连接
                connection.release();
            });
        });
    },
    findAll: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query($sql.queryAll, function(err, result) {
                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);
                console.log(result)
                // 释放连接
                connection.release();
            });
        })
    }
};
