var mssql = require("mssql");
// config for your database
var config = {
    user: 'sa',
    password: '0nE!ct@DB',
    server: '10.11.4.153', //demo.one-ict.com
    database: 'ERP_American_Tmart',
    port: 1433,
    driver: 'tedious',
    "options": {
        "encrypt": false,
        "enableArithAbort": true,
        "trustServerCertificate": false
    }
};


mssql.connect(config, (err)=> {
    if (!err) {
        console.log("MS SQL Db Database is connected ...\nLogger: \n");
    } else {
        console.log("Error mssql server connecting database ...\nLogger: \n");
    }
});
var msconnection = new mssql.Request();

module.exports = msconnection;