const db = require('../../config/db.js');

const product = db.sequelize.define('ecom_products', {
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
    Discount: db.Sequelize.FLOAT,
    MRP: db.Sequelize.FLOAT,
    UnitPrice: db.Sequelize.FLOAT,
    Unit: db.Sequelize.FLOAT,
    UnitsInStock: db.Sequelize.INTEGER,
    Category: db.Sequelize.STRING,
    Category_BN: db.Sequelize.STRING,
    Description: db.Sequelize.STRING,
    Description_BN: db.Sequelize.STRING,
    SID: db.Sequelize.INTEGER,
    Rol: db.Sequelize.STRING,
    ParentId: db.Sequelize.INTEGER,    
    Inserted_By: db.Sequelize.STRING,
    Inserted_Date: db.Sequelize.DATE,

    Display: db.Sequelize.STRING,
    ImgPath: db.Sequelize.STRING,
    FileName: db.Sequelize.STRING,
    FileUrl: db.Sequelize.STRING,
    FileExtension: db.Sequelize.STRING,    
    RankId: db.Sequelize.INTEGER,

    IsHome: db.Sequelize.BOOLEAN,  
    IsPopular: db.Sequelize.BOOLEAN,    
    IsNew: db.Sequelize.BOOLEAN,    
    ColorId: db.Sequelize.INTEGER,    
    SizeId: db.Sequelize.INTEGER,    
    OfferPrice: db.Sequelize.FLOAT,
    OfferText: db.Sequelize.STRING,
    OfferExpiry: db.Sequelize.DATE,

    TrackedId: db.Sequelize.STRING,
    CreateBy: db.Sequelize.STRING,
    CreateDate: db.Sequelize.DATE,
    IsDelete: db.Sequelize.BOOLEAN,
    Active: db.Sequelize.BOOLEAN,
});

//db.sequelize.sync({ force: true });


//    { force: true })
//     .then(() => {
//         product.create({
//             PID: 0,
//             PName: 'Apple',
//             PName_BN: 'Apple',
//             Brand: 'Apple',
//             Brand_BN: 'Apple',
//             UnitPrice: 250,
//             Unit: 500,
//             UnitsInStock: 50,
//             Category: 'Apple',
//             Category_BN: 'Apple',
//             Description: 'Apple',
//             Description_BN: 'Apple',
//             SID: 1,
//             Rol: 1,
//             ParentId: 1,
//             ImgPath: 'image/product/Apple.jpg',
//             Inserted_By: 11,
//             Inserted_Date: new Date().toLocaleDateString(),

//             Display: 1,
//             FileUrl: 'image/product/Apple.jpg',
//             FileExtension: '.jpg',
//             FileImage: 'image/product/Apple.jpg',
//             TrackedId: '127',
//             Active: 1,
//         });
//     }).catch(err => {
//         console.log('Error : ' + err);
//     });

module.exports = product;