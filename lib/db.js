var mysql = require('mysql');
var db = mysql.createConnection({
    host     : '192.168.0.128',
    user     : 'nodejs',
    password : '111111',
    database : 'opentutorials'
    //multipleStatements:true
  });
  db.connect();
module.exports = db;