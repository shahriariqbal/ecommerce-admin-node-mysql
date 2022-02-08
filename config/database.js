var mysql = require('mysql');

/* Connect database mysql */
var connection = mysql.createConnection({
  host: '103.106.236.89',
  user: 'root',
  password: 'Admin#123',
  database: 'radius'
});

connection.connect(function (err) {
  if (!err) {
    console.log("Database is connected ...\nLogger: \n");
  } else {
    console.log("Error connecting database ...\nLogger: \n");
  }
});





module.exports = connection;