const { QueryTypes } = require('sequelize');

function ProductsModel() {
    this.insert = (sql_query) => {
        return new Promise((resolve, reject)=> {
            const rows = db.sequelize.query(sql_query, { type: QueryTypes.INSERT });
            if (rows) {
                resolve(rows);
            } else {
                reject('error : ');
            }            
        });
    }
    this.select = (sql_query) => {
        return new Promise((resolve, reject)=> {
            const rows = db.sequelize.query("select * from ecom_settings", { type: QueryTypes.SELECT });
            if (rows) {
                resolve(rows);
            } else {
                reject('error : ');
            }
        });
    }
    this.select_query = (sql_query) => {
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
module.exports = new ProductsModel();