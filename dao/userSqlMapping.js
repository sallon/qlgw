/**
 * Created by yubo on 2016/11/29.
 */
var user = {
    insert:'INSERT INTO user(id, email, pwd) VALUES(0,?,?)',
    update:'update user set email=?, pwd=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryByEmail: 'select * from user where email=?',
    queryAll: 'select * from user'
};

module.exports = user;