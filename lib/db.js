var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Malrl91735!',
    database: 'opentutorials'
});

db.connect();

module.exports = db;