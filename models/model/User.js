const db = require('../../config/db.js');

const user = db.sequelize.define('Ecom_User', {
    Id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    UID: db.Sequelize.INTEGER,
    Name: db.Sequelize.STRING,
    Email: db.Sequelize.STRING,
    Username: db.Sequelize.STRING,
    Password: db.Sequelize.STRING,

    FileUrl: db.Sequelize.STRING,
    FileExtension: db.Sequelize.STRING,
    FileImage: db.Sequelize.STRING,
    Birthday: db.Sequelize.DATE,

    TrackedId: db.Sequelize.STRING,
    CreateBy: db.Sequelize.STRING,
    CreateDate: db.Sequelize.DATE,
    Delete: db.Sequelize.BOOLEAN,
    Active: db.Sequelize.BOOLEAN,
});

// db.sequelize.sync({ force: true })
//     .then(() => {
//         user.create({
//             UID: 1,
//             Name: 'Md Mahafuzul Huq',
//             Email: 'gmsanzid@gmail.com',
//             Birthday: new Date().toLocaleDateString(),
//             Username: 'gmsanzid@gmail.com',
//             Password: '1qaz@WSX',

//             FileUrl: 'db.Sequelize.STRING',
//             FileExtension: '.jpg',
//             FileImage: 'db.Sequelize.STRING',

//             TrackedId: 'Noc Desktop',
//             CreateBy: 11,
//             CreateDate: new Date().toLocaleDateString(),
//             Delete: false,
//             Active: true,
//         })
//     }).catch(err => {
//         console.log('Error : ' + err);
//     })

module.exports = user;