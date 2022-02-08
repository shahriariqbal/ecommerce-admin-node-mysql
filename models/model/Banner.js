const db = require('../../config/db.js');

const home = db.sequelize.define('ecom_banners', {
    Id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    PID: db.Sequelize.INTEGER,
    ImgPath: db.Sequelize.STRING,
    FileName: db.Sequelize.STRING,
    Link: db.Sequelize.STRING,
    Text: db.Sequelize.STRING,
    IsHomePage: db.Sequelize.BOOLEAN,  
    BannerType: db.Sequelize.INTEGER, 

    TrackedId: db.Sequelize.STRING,
    CreateBy: db.Sequelize.STRING,
    CreateDate: db.Sequelize.DATE,
    UpdateBy: db.Sequelize.STRING,
    UpdateDate: db.Sequelize.DATE,
    IsDelete: db.Sequelize.BOOLEAN,
    IsActive: db.Sequelize.BOOLEAN,
});

//db.sequelize.sync({ force: true });
module.exports = home;

// PName: db.Sequelize.STRING,
// PName_BN: db.Sequelize.STRING,
// Brand: db.Sequelize.STRING,
// Brand_BN: db.Sequelize.STRING,