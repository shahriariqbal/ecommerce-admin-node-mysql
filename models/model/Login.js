const db = require('../../config/db.js');
const login = db.sequelize.define('user_logins', {
    user_id: db.Sequelize.INTEGER,
    user: db.Sequelize.STRING,
    pass: db.Sequelize.STRING,
    isDelete: db.Sequelize.BOOLEAN,
    isActive: db.Sequelize.BOOLEAN,
    isCounted: db.Sequelize.INTEGER,
    trackedId: db.Sequelize.TEXT,
    create_at: db.Sequelize.DATE
});

// db.sequelize.sync({ force: true })
//     .then(() => {
//         login.create({
//             user_id: 1,
//             user: 'Mintu',
//             pass: '123456',
//             isDelete: false,
//             isActive: true,
//             isCounted: true,
//             trackedId: '127.0.0.1',
//             create_at: new Date().toLocaleDateString(),
//         })
//     }).catch(err => {
//         console.log('Error :' + err);
//     });

module.exports = login;