/**
 * Created by yubo on 2016/11/29.
 */
var user = {
    insert:'INSERT INTO customer(id, companyName,userName,telphone,position,description, email,' +
    ' createdtime,creator,modifiedtime,modifier,domainid,is_delete,hasRead)' +
    ' VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,0)',
    update:'update user set email=?, pwd=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryByEmail: 'select * from customer where email=?',
    queryAll: 'select * from customer'
};

module.exports = user;