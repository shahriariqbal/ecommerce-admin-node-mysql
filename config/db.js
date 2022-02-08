const Sequelize = require("sequelize");
const express = require("express");

//var bodyParser = require('body-parser');
//express.use(bodyParser.urlencoded({ extended: true }));
//express.use(bodyParser.json());

// var   = process.env.NODE_ENV || 'development';
// var config = require(__dirname + '/../config/config.json')[env];

const db = {};
const sequelize = new Sequelize("designclub_ecom", "root", "", {
  host: "localhost",
  dialect: "mysql", //| 'mariadb' | 'postgres' | 'mssql' */
  define: { timestamps: false },
});

// const sequelize = new Sequelize('ERP_American_TMart', 'sa', '0nE!ct@DB', {
//     host: '10.11.4.153',
//     operatorsAliases: 0,
//     define: { timestamps: false },
//     dialect: 'mssql',
//     options:{
//         trustServerCertificate:false,
//         "encrypt": false,
//         "enableArithAbort": true
//     } //dialect: //process.env.db_dialect, // pick one of 'mysql','sqlite','postgres',
// });

//const sequelize = new Sequelize('postgres://postgres:1qaz@127.0.0.1:5432/ERP_AmericanTMart', { dialect: 'postgres' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Express = express;
module.exports = db;
/////db.sequelize.sync({ force: true });
