const { QueryTypes } = require('sequelize');

function CustomerModel() {
    this.insert = function (sql_query) {
        return new Promise((resolve, reject) => {
            const rows = db.sequelize.query(sql_query, {type: QueryTypes.SELECT });
            if (rows) {
                resolve(rows);
            } else {
                reject('error : ');
            }
        });
    }
    this.select = function (user_id, pwd) {
        return new Promise((resolve, reject) => { 
            var sql_query = "select * from ecom_users where username='" + user_id + "' and password='" + pwd + "'";
            const rows = db.sequelize.query(sql_query, { type: QueryTypes.SELECT });
            if (rows) {
                resolve(rows);
            } else {
                reject('error : ');
            }
        });
    }
    this.select_query = function (sql_query) {
        return new Promise((resolve, reject) => {
            const rows = db.sequelize.query(sql_query, { type: QueryTypes.SELECT });
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

module.exports = new CustomerModel();