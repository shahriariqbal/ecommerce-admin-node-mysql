const db = require('../../config/db.js');

const offer = db.sequelize.define('ecom_offers', {
    Id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CID: db.Sequelize.INTEGER,
    CName: db.Sequelize.STRING,
    CName_BN: db.Sequelize.STRING,
    CouponNo: db.Sequelize.STRING,
    ValidFrom: db.Sequelize.DATE,
    ValidTo: db.Sequelize.DATE,
    ValidCountry: db.Sequelize.STRING,
    ValidOutletName: db.Sequelize.STRING,
    Reason: db.Sequelize.STRING,
    DiscountPrice: db.Sequelize.INTEGER,
    Percent: db.Sequelize.BOOLEAN,

    TrackedId: db.Sequelize.STRING,
    CreateBy: db.Sequelize.STRING,
    CreateDate: db.Sequelize.DATE,
    IsDelete: db.Sequelize.BOOLEAN,
    Active: db.Sequelize.BOOLEAN,
});

//db.sequelize.sync({ force: true });

module.exports = offer;