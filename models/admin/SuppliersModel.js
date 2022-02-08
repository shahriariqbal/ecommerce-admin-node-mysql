const { QueryTypes } = require('sequelize');
function SuppliersModel() {
    this.insert = (sql_query) => {
        console.log(sql_query);
        return new Promise((resolve, reject) => {
            const rows = db.sequelize.query(sql_query, { type: QueryTypes.INSERT});
            if (rows) {
                resolve(rows);
            } else {
                reject('error : ');
            }
        });
    }
    this.select = (sql_query) => {
        return new Promise((resolve, reject) => {
            const rows = db.sequelize.query(sql_query, { type: QueryTypes.SELECT });

            if (rows) {
                resolve(rows);
            } else {
                reject('error : wwwwwwwwww');
            }
        });
    }
    this.selectByQuery = (sql_query) => {
        return new Promise((resolve, reject)=> {
            const rows = db.sequelize.query(sql_query, { type: QueryTypes.SELECT });
            if (rows) {
                resolve(rows);
            } else {
                reject('error : ');
            }
        });
    }
    this.select_group = (sql_query) => {
        return new Promise((resolve, reject)=> {
          const rows = db.sequelize.query(sql_query, { type: QueryTypes.SELECT });
          if(rows){
              resolve(rows);
          }else{
              reject('error : ');
          }
        });
    }
    this.update = function () {}
    this.delete = function () {}
}

module.exports = new SuppliersModel();