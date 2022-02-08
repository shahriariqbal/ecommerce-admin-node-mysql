const db = require('../../config/db.js');

const Setting = db.sequelize.define('ecom_setting', {
    Id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    GID: db.Sequelize.INTEGER,
    GText: db.Sequelize.STRING,
    Code: db.Sequelize.STRING,
    Text: db.Sequelize.STRING,
    ImgPath: db.Sequelize.STRING,

    CreateBy: db.Sequelize.STRING,
    CreateDate: db.Sequelize.DATE,
    UpdateBy: db.Sequelize.STRING,
    UpdateDate: db.Sequelize.DATE,
    IsDelete: db.Sequelize.BOOLEAN,
    Active: db.Sequelize.BOOLEAN
});

module.exports = Setting;