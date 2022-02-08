const db = require('../../config/db.js');

const home = db.sequelize.define('ecom_flash_details', {
    Id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    PID: db.Sequelize.INTEGER,
    PName: db.Sequelize.STRING,
    PName_BN: db.Sequelize.STRING,
    Brand: db.Sequelize.STRING,
    Brand_BN: db.Sequelize.STRING,
    Description: db.Sequelize.STRING,
    Description_BN: db.Sequelize.STRING,
    ImgPath: db.Sequelize.STRING,
    FileName: db.Sequelize.STRING,
    Link: db.Sequelize.STRING,
    Discount: db.Sequelize.FLOAT,
    MRP: db.Sequelize.FLOAT,  
    UnitPrice: db.Sequelize.FLOAT,
    OfferPrice: db.Sequelize.FLOAT,
    OfferText: db.Sequelize.STRING,
    OfferExpiry: db.Sequelize.DATE,
    UnitsInStock: db.Sequelize.INTEGER,
    IsPercent: db.Sequelize.BOOLEAN,
    IsCombo: db.Sequelize.BOOLEAN,
    

    TrackedId: db.Sequelize.STRING,
    CreateBy: db.Sequelize.STRING,
    CreateDate: db.Sequelize.DATE,
    IsDelete: db.Sequelize.BOOLEAN,
    Active: db.Sequelize.BOOLEAN
});

//db.sequelize.sync({ force: true });
module.exports = home;