const db =require('../../config/db.js');

const color = db.sequelize.define('ecom_colors', {
    Id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    PID: db.Sequelize.INTEGER,
    ColorId: db.Sequelize.INTEGER,
    Color: db.Sequelize.STRING,
    Color_BN: db.Sequelize.STRING,

    TrackedId: db.Sequelize.STRING,
    CreateBy: db.Sequelize.STRING,
    CreateDate: db.Sequelize.DATE,
    IsDelete: db.Sequelize.BOOLEAN,
    Active: db.Sequelize.BOOLEAN,
});
//db.sequelize.sync({ force: true });
module.exports = color;