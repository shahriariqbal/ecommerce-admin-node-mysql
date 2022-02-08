const db = require("../../config/db.js");

const size = db.sequelize.define("ecom_sizes", {
  Id: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PID: db.Sequelize.INTEGER,
  SizeId: db.Sequelize.INTEGER,
  Size: db.Sequelize.STRING,
  Size_BN: db.Sequelize.STRING,

  TrackedId: db.Sequelize.STRING,
  CreateBy: db.Sequelize.STRING,
  CreateDate: db.Sequelize.DATE,
  IsDelete: db.Sequelize.BOOLEAN,
  Active: db.Sequelize.BOOLEAN,
});
//db.sequelize.sync({ force: true });
module.exports = size;
