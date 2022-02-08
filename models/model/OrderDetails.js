const db = require('../../config/db.js');

const OrderDetails = db.sequelize.define('ecom_order_detail_s', {
    Id: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true, },
    OrderId: db.Sequelize.INTEGER,
    TONumber: db.Sequelize.STRING,
    PID: db.Sequelize.INTEGER,
    PName: db.Sequelize.STRING,
    PQty: db.Sequelize.INTEGER,
    ItemQty: db.Sequelize.INTEGER,
    UnitPrice: db.Sequelize.INTEGER,
    NetPrice: db.Sequelize.INTEGER,
    ImgPath: db.Sequelize.STRING,

    CreateBy: db.Sequelize.STRING,
    CreateDate: db.Sequelize.DATE,
    UpdateBy: db.Sequelize.STRING,
    UpdateDate: db.Sequelize.DATE,
    IsDelete: db.Sequelize.BOOLEAN,
    Active: db.Sequelize.BOOLEAN,
});

//db.sequelize.sync({ force: true });
module.exports = OrderDetails;