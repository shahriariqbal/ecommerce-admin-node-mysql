const db = require('../../config/db.js');

const menu = db.sequelize.define('Ecom_Menu_bak', {
    Id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    MenuId: db.Sequelize.INTEGER,
    Title: db.Sequelize.STRING,
    Path: db.Sequelize.STRING,
    ParentId: db.Sequelize.INTEGER,
    DisplayOrder: db.Sequelize.INTEGER,
    Parameter: db.Sequelize.STRING,
    NodeId: db.Sequelize.INTEGER,
    Style: db.Sequelize.STRING,
    Categories: db.Sequelize.STRING,
    MenuRoles: db.Sequelize.STRING,

    TrackedId: db.Sequelize.STRING,
    CreateBy: db.Sequelize.STRING,
    CreateDate: db.Sequelize.DATE,
    UpdateBy: db.Sequelize.STRING,
    UpdateDate: db.Sequelize.DATE,
    IsDelete: db.Sequelize.BOOLEAN,
    Active: db.Sequelize.BOOLEAN,
});
//db.sequelize.sync({ force: true }); //{ force: true }

// .then(() => {
//     product.create();
// }).catch(err => {
//     console.log('Error : ' + err);
// });

module.exports = menu;