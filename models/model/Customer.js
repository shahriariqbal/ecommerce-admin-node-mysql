const db = require("../../config/db.js");

const customer = db.sequelize.define("ecom_customer_s", {
  Id: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  CID: { type: db.Sequelize.STRING, unique: true },
  TONumber: db.Sequelize.STRING,
  Name: db.Sequelize.STRING,
  Address: db.Sequelize.STRING,
  Area: db.Sequelize.STRING,

  MobileNo: db.Sequelize.STRING,
  PhoneNo: db.Sequelize.STRING,
  Email: db.Sequelize.STRING,
  Username: db.Sequelize.STRING,
  Password: db.Sequelize.STRING,
  Priority: db.Sequelize.STRING,
  HostAddress: db.Sequelize.STRING,

  FileUrl: db.Sequelize.STRING,
  FileExtension: db.Sequelize.STRING,
  FileImage: db.Sequelize.STRING,
  Birthday: db.Sequelize.DATE,

  TrackedId: db.Sequelize.STRING,
  CreateBy: db.Sequelize.STRING,
  CreateDate: db.Sequelize.DATE,
  UpdateBy: db.Sequelize.STRING,
  UpdateDate: db.Sequelize.DATE,
  IsDelete: db.Sequelize.BOOLEAN,
  Active: db.Sequelize.BOOLEAN,
  Counted: db.Sequelize.INTEGER,
});

// db.sequelize.sync({ force: true })
//     .then(() => {
//         product.create({
//             CID: '1911788888',
//             TONumber: '880',
//             Name: 'Md Karim',
//             Address: 'Houser # 11, Road# 11, Mirpur, Dhaka',
//             Aria: 'Mirpur',

//             MobileNo: '1911788888',
//             PhoneNo: '02888888',
//             Priority: 'Top',
//             HostAddress: '127.0.0.1',

//             TrackedId: '127',
//             CreateBy: '11',
//             CreateDate: new Date().toLocaleTimeSTRING(),
//             UpdateBy: '11',
//             UpdateDate: new Date().toLocaleTimeSTRING(),
//             Delete: 0,
//             Active: 1,
//         });
//     }).catch(err => {
//         console.log('Error : ' + err);
//     });

module.exports = customer;
