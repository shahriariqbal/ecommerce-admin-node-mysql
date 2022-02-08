const {
	QueryTypes
} = require('sequelize');

async function getAllData() {
	try {
		var sql_query = 'select * from ecom_product_images where IsDelate = 0 ORDER BY Id DESC';
		return new Promise((resolve, reject) => {
			const rows = db.sequelize.query(sql_query, {
				type: QueryTypes.SELECT
			});
			if (rows) {
				resolve(rows);
			} else {
				reject('error : ');
			}
		}).catch(function (e) {
			return e;
		});
	} finally {}
}
async function getByProductId(product_id) {
	try {
		var sql_query = 'select * from ecom_product_images where pid =' + product_id;
		return new Promise((resolve, reject) => {
			const rows = db.sequelize.query(sql_query, {
				type: QueryTypes.SELECT
			});
			if (rows) {
				resolve(rows);
			} else {
				reject('error : ');
			}
		}).catch(function (e) {
			return e;
		});

	} finally {}
}
async function saveDataCallback(data) {
	var sql_query = "INSERT INTO ecom_product_images(pid, image, image_path, default_image, IsDelete, Active) " +
		"values(" + data.pid + ",'" + data.image + "','" + data.image_path + "'," + data.default_image + ",0,1) ";
	return new Promise((resolve, reject) => {
		const rows = db.sequelize.query(sql_query, {
			type: QueryTypes.INSERT
		});
		if (rows) {
			resolve(rows);
		} else {
			reject('error : ');
		}
	}).catch(function (e) {
		return e;
	});

	// const rows = db.sequelize.query(sql_query, { type: QueryTypes.INSERT });
	// 		if (rows) {
	// 			resolve(rows);
	// 		} else {
	// 			reject('error : ');
	// 		}
	// msconnection.query(sql, function (err, rows) {
	// 	if (!err) {
	// 		callback(false);
	// 	} else {
	// 		callback(rows);
	// 	}
	// });

}
async function deleteRecord(id) {
	try {
		if (id) {
			var sql_query = 'delete from ecom_product_images where Id = ' + id;
			return new Promise((resolve, reject) => {
				const rows = db.sequelize.query(sql_query, {
					type: QueryTypes.SELECT
				});
				if (rows) {
					resolve(rows);
				} else {
					reject('error : ');
				}
			}).catch(function (e) {
				return e;
			});
		} else {
			return null;
		}
	} finally {

	}
}
async function setDefaultImage(id, pid) {
	try {
		if (id) {

			var sql_query = "UPDATE `ecom_product_images` SET `default_image` = '0' WHERE `ecom_product_images`.`pid` = " + pid;
			const rows = db.sequelize.query(sql_query, { type: QueryTypes.UPDATE });
			// if (rows) {
			// 	console.log(rows);
			// }			
			var sql_query = 'update ecom_products set imgPath=(select image_path from ecom_product_images where Id=' + id + ' LIMIT 1) where Id=' + pid;
			var sql = 'update ecom_product_images set default_image = 1 where Id =' + id;
			const _rows = db.sequelize.query(sql, { type: QueryTypes.UPDATE });
			//var sql_query = 'update ecom_products set imgPath=(select image from ecom_product_images where Id='+pid+' Limit 1) where pid=13';
			//console.log(sql_query);
			return new Promise((resolve, reject) => {
				const rows = db.sequelize.query(sql_query, { type: QueryTypes.UPDATE });				
				if (rows) {
					resolve(rows);
				} else {
					reject('error : ');
				}
			}).catch(function (e) {
				return e;
			});
		} else {
			return null;
		}
	} finally {

	}
}
async function saveData(data) {
	try {
		if (data) {
			var sql_query = 'INSERT INTO ecom_product_images set ? ';
			return new Promise((resolve, reject) => {
				const rows = db.sequelize.query(sql_query, {
					type: QueryTypes.SELECT
				});
				if (rows) {
					resolve(rows);
				} else {
					reject('error : ');
				}
			}).catch(function (e) {
				return e;
			});
			// return new Promise((resolve, reject) => {
			// 	connectPool.query(sql, data, (err, result) => {
			// 		if (err) {
			// 			console.log(data);
			// 			reject(err)
			// 		} else {
			// 			resolve(result)
			// 		}
			// 	})
			// })
		} else {
			return null;
		}
	} finally {
		//if (connectPool && connectPool.end) connectPool.end();
	}
}
async function getDefaultImage(product_id) {
	try {
		var sql = 'select * from ' + table + ' where product_id =' + product_id + ' AND  default_image = 1';
		return new Promise((resolve, reject) => {
			const rows = db.sequelize.query(sql, { type: QueryTypes.UPDATE });
				if (rows) {
					resolve(rows);
				} else {
					reject('error : ');
				}
		}).catch(function (e) {
			return e;
		});

	} finally {

	}
}
module.exports = {
	getByProductId,
	saveData,
	getAllData,
	deleteRecord,
	saveDataCallback,
	getDefaultImage,
	setDefaultImage
};