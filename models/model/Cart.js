const db = require('../../config/db.js');

const cart = db.sequelize.define('Ecom_Cart', {
    Id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CID: db.Sequelize.INTEGER,
    ProductID: db.Sequelize.INTEGER,
    TONumber: db.Sequelize.STRING,
    PName: db.Sequelize.STRING,
    HostAddress: db.Sequelize.STRING,
    UnitPrice: db.Sequelize.INTEGER,
    NetPrice: db.Sequelize.INTEGER,

    TrackedId: db.Sequelize.STRING,
    CreateBy: db.Sequelize.STRING,
    CreateDate: db.Sequelize.DATE,
    IsDelete: db.Sequelize.BOOLEAN,
    Active: db.Sequelize.BOOLEAN,
});

//db.sequelize.sync({ force: true });
module.exports = cart;