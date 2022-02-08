const {QueryTypes} = require('sequelize');

function ServiceModel() {
    this.insert = function (sql_query) {
        return new Promise((resolve, reject) => {
            const rows = db.sequelize.query(sql_query, {type: QueryTypes.INSERT});
            if (rows) {
                resolve(rows);
            } else {
                reject('error : ');
            }
        });
    }
    this.select = function (sql_query) {
        return new Promise((resolve, reject) => {
            const rows = db.sequelize.query(sql_query, {
                type: QueryTypes.SELECT
            });
            if (rows) {
                resolve(rows);
            } else {
                reject('error : ');
            }
        });
    }
    this.selectByQuery = function (sql_query) {
        return new Promise((resolve, reject) => {
            const rows = db.sequelize.query(sql_query, {
                type: QueryTypes.SELECT
            });
            if (rows) {
                resolve(rows);
            } else {
                reject('error : ');
            }
        });
    }
    this.select_group = function (sql_query) {
        //'select gid,max(gtext) gtext from ecom_settings group by gid'
        return new Promise((resolve, reject) => {
            const rows = db.sequelize.query(sql_query, {
                type: QueryTypes.SELECT
            });
            if (rows) {
                resolve(rows);
            } else {
                reject('error : ');
            }
        });
    }
    this.update = function () {}
    this.delete = function () {}
}

module.exports = new ServiceModel();