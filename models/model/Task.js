const db = require('../database/db.js');
const tasks = db.sequelize.define('Ecom_Task', {
    Id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    TID: db.Sequelize.INTEGER,
    Title: db.Sequelize.STRING,
    Description: db.Sequelize.TEXT,
    Date: db.Sequelize.DATE,
    Time_from: db.Sequelize.STRING,
    Time_to: db.Sequelize.STRING,
    Location: db.Sequelize.TEXT,
    Notify: db.Sequelize.INTEGER,
    Email: db.Sequelize.TEXT,
    Priority: db.Sequelize.INTEGER,

    TrackedId: db.Sequelize.STRING,
    CreateBy: db.Sequelize.STRING,
    CreateDate: db.Sequelize.DATE,
    Delete: db.Sequelize.BOOLEAN,
    Active: db.Sequelize.BOOLEAN,
});

// db.sequelize.sync({ force: true })
//     .then(() => {
//         tasks.create({
//             TID: 0,
//             Title: 'db.Sequelize.STRING',
//             Description: 'db.Sequelize.TEXT',
//             Date: new Date().toLocaleDateString(),
//             Time_from: new Date().toLocaleDateString(),
//             Time_to: new Date().toLocaleDateString(),
//             Location: 'Rajshahi-6210',
//             Notify: 50,
//             Email: 'db@gmail.com',
//             Priority: 10,
//             TrackedId: '127',
//             CreateBy: 11,
//             CreateDate: new Date().toLocaleDateString(),
//             Delete: false,
//             Active: true,
//         });
//     }).catch(err => {
//         console.log('Error :' + err);
//     });

module.exports = tasks