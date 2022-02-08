const db = require('../../config/db.js');

const article = db.sequelize.define('user_articles', {
    Id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: db.Sequelize.TEXT,
    body: db.Sequelize.TEXT
});

//db.sequelize.sync({ force: true })
//     .then(() => {
//         article.create({
//             title: 'db.Sequelize.STRING',
//             body: 'db.Sequelize.STRING'
//         });
//     }).catch(err => {
//         console.log('Error :' + err);
//     });

module.exports = article;