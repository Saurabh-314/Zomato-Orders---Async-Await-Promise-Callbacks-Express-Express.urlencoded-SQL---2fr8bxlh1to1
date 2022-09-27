
var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "test",
    multipleStatements: true
});

con.on('error', function(err) {
  console.log("[mysql error]",err);
});

// con.connect(function (err) {
//     if (err) return console.log("failed to connect to mysql server/ database", err);
//     else return console.log("connection establish with Datebase!!!!");
// });

module.exports = con;