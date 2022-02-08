const { QueryTypes } = require("sequelize");

function OrderModel() {
  this.insert = function (sql_query) {
    return new Promise((resolve, reject) => {
      const rows = db.sequelize.query(sql_query, { type: QueryTypes.INSERT });
      if (rows) {
        resolve(rows);
      } else {
        reject("error : ");
      }
    }).catch((e) => {
      return e;
    });
  };

  this.select = function (user_id, pwd) {
    return new Promise((resolve, reject) => {
      var sql_query =
        "select * from ecom_users where username='" +
        user_id +
        "' and password='" +
        pwd +
        "'";
      const rows = db.sequelize.query(sql_query, { type: QueryTypes.SELECT });
      if (rows) {
        resolve(rows);
      } else {
        reject("error : ");
      }
    }).catch((e) => {
      return e;
    });
    //console.log("select * from ecom_users where username='"+userid+"' and password='"+pwd+"'");
    //     msconnection.query("select * from ecom_users where username='" + userid + "' and password='" + pwd + "'", function (err, rows) {
    //         if (!err) {
    //             resolve(rows);
    //         } else {
    //             reject(err);
    //         }
    //     });
    // });
  };
  this.select_query = function (sql_query) {
    return new Promise((resolve, reject) => {
      const rows = db.sequelize.query(sql_query, { type: QueryTypes.SELECT });
      if (rows) {
        resolve(rows);
      } else {
        reject("error : ");
      }
    }).catch((e) => {
      return e;
    });
    // msconnection.query(sqlquery, function (err, rows) {
    //     if (!err) {
    //         resolve(rows);
    //     } else {
    //         reject(err);
    //     }
    // });
    //});
  };
  this.update_query = function (update_query) {
    return new Promise((resolve, reject) => {
      const rows = db.sequelize.query(update_query, {
        type: QueryTypes.UPDATE,
      });
      if (rows) {
        resolve(rows);
      } else {
        reject("error : ");
      }
    }).catch((e) => {
      return e;
    });
  };
  this.delete = function () {};
}

module.exports = new OrderModel();
