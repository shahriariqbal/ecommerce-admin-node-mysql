var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "designclub_ecom",
});

//connection.connect(); //SELECT 1 + 1 AS solution
// connection.query('select * from ecom_products where rol = 0 and active=1', (err, rows, fields)=> {
//     if (err) throw err
//     console.log('The solution is: ', rows[0].PName)
// })

module.exports = connection;
//connection.end()
