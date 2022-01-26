var mysql = require('mysql');

var conn = function(){
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'ferrari_node',
    });
}

module.exports = function(app){
    return conn;
}