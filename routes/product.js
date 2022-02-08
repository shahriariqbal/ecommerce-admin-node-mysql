const express = require('express');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../config/db.js');
const {    QueryTypes} = require('sequelize');
// const {    check,    validationResult} = require('express-validator/check');
const product = require('../models/model/Product.js');
const color = require('../models/model/Color.js');
const size = require('../models/model/Size.js');

const router = express.Router();

router.get('/getproductall', (req, res, next) => {
    //var name = req.query.Name;
    product.findAll().then(products => {
        if (products.length > 0) {
            res.json({
                status: true,
                message: 'products find successfully',
                data: products
            });
        } else {
            res.json({
                status: false,
                message: 'products not found',
                data: []
            });
        }
        //res.json(products);
    }).catch(err => {
        console.log('Error ' + err);
    });
});
router.get('/getproducts', (req, res, next) => {
    var name = req.query.Name
    product.findAll({
        where: {
            [Op.or]: [
                {
                    PName: {
                        [Op.like]: '%' + name + '%',
                    }
                }, {
                    Brand: {
                        [Op.like]: '%' + name + '%',
                    }
                },
                {
                    Category: {
                        [Op.like]: '%' + name + '%',
                    }
                }, {
                    Description: {
                        [Op.like]: '%' + name + '%',
                    }
                }
            ]
        }
    }).then(products => {
        if (products.length > 0) {
            res.json({
                status: true,
                message: 'products find successfully',
                data: products
            });
        } else {
            res.json({
                status: false,
                message: 'products not found',
                data: []
            });
        }
        //res.json(products);
    }).catch(err => {
        console.log('Error ' + err);
    });
});
router.get('/getproductsbyparam', (req, res, next) => {
    var name = req.query.Name;
    product.findAll({
        where: {
            [Op.or]: [{
                Brand: {
                    [Op.like]: '%' + name + '%',
                }
            }, {
                Category: {
                    [Op.like]: '%' + name + '%',
                }
            }]
        }
    }).then(products => {
        if (products.length > 0) {
            res.json({
                status: true,
                message: 'products find successfully',
                data: products
            });
        } else {
            res.json({
                status: false,
                message: 'products not found',
                data: []
            });
        }
        //res.json(products);
    }).catch(err => {
        console.log('Error ' + err);
    });
});
router.get('/getproductdetail', (req, res, next) => {
    var product_detail_obj = {};
    var Id = req.query.Id;
    var name = '';

    var sql_query = "Select pid, image, image_path from ecom_product_images Where pid = " + Id;
    const product_images = db.sequelize.query(sql_query, { type: QueryTypes.SELECT });
    product.findByPk(Id).then(_product => {
        //console.log(product_images);
        name = _product.Category;
        _product.Color = "N/A";
        _product.Size = "N/A";
        _product.Colors = [];
        _product.Sizes = [];

        product_detail_obj.Banner = product_images; //[imgUrl, 'One_' + imgUrl, 'Two_' + imgUrl, 'Three_' + imgUrl, 'Four_' + imgUrl];
        product_detail_obj.Product = _product;
        product_detail_obj.product_images = product_images;

        color.findAll({ where: { PID: Id } }).then((_colors) => {            
            product_detail_obj.Colors = _colors;
            size.findAll({ where: { PID: Id } }).then((_sizes) => {                
                product_detail_obj.Sizes = _sizes;
                product.findAll({ where: {
                        [Op.or]: [{
                            Brand: {
                                [Op.like]: '%' + name + '%',
                            }
                        }, {
                            Category: {
                                [Op.like]: '%' + name + '%',
                            }
                        }]
                    }
                }).then(reproduces => {
                    product_detail_obj.Recommended = reproduces;
                    if (reproduces.length > 0) {
                        res.json({
                            status: true,
                            message: 'products find successfully',
                            data: product_detail_obj
                        });
                    } else {
                        res.json({
                            status: false,
                            message: 'products not found',
                            data: []
                        });
                    }
                }).catch(err => {
                    console.log('Error ' + err);
                });

            });

        });
    }).catch(err => {
        console.log('Error ' + err);
    });

});
router.post('/createProduct', (req, res, next) => {
    req.checkBody('PID', 'PId is required').notEmpty();
    var errors = req.validationErrors();
    if (errors.length > 0 && req.body.PID) {
        res.status(400);
        res.json({
            error: 'Bad data request' + errors[0].msg,
            //status: failStatus
            //message: errors[0].msg,
        });
    } else {
        next();
        var pid = req.body.PID;
        //console.log(req.body.PID);
        if (pid == 0) {
            product.create(req.body).then(data => {
                res.send(data);
            }).catch(err => {
                console.log('Error :' + err);
            });
        } else {
            product.update(req.body, {
                where: {
                    PID: req.body.PID
                }
            }).then(data => {
                if (data.length > 0) {
                    res.json({
                        status: true,
                        message: 'products find successfully',
                        data: data
                    });
                } else {
                    res.json({
                        status: false,
                        message: 'products not found',
                        data: []
                    });
                }
                //res.send(data);
            }).catch(err => {
                console.log('Error :' + err);
            });
        }
    }
});
router.get('/deleteProduct', (req, res, next) => {
    req.checkBody('pid', 'PId is required').notEmpty();
    var errors = req.validationErrors();
    if (errors.length > 0 && req.body.pid) {
        return res.json({
            status: failStatus,
            message: errors[0].msg,
        });
    } else {
        product.destroy({
            where: {
                PID: req.query.pid
            }
        }).then(data => {
            if (data.length > 0) {
                res.json({
                    status: true,
                    message: 'product destroy successfully',
                    data: data
                });
            } else {
                res.json({
                    status: false,
                    message: 'product not found',
                    data: []
                });
            }
            //res.send(data);
        }).catch(err => {
            console.log('Error :' + err);
        });
    }
});
router.get('/getproductsbycid', (req, res, next) => {
    var cid = req.query.cid;
    product.findAll({ where: { ParentId: cid }}).then(products => {
        if (products.length > 0) {
            res.json({
                status: true,
                message: 'products find successfully',
                data: products
            });
        } else {
            res.json({
                status: false,
                message: 'products not found',
                data: []
            });
        }
        //res.json(products);
    }).catch(err => {
        console.log('Error ' + err);
    });
});
////// for category //////
router.get('/getcategories', (req, res, next) => {   
    product.findAll({where: { Rol:1, ParentId:0}}).then(category => {
        if (category.length > 0) {
            res.json({
                status: true,
                message: 'products find successfully',
                data: category
            });
        } else {
            res.json({
                status: false,
                message: 'products not found',
                data: []
            });
        }
        //res.json(products);
    }).catch(err => {
        console.log('Error ' + err);
    });
});
router.get('/getcategorybyid', (req, res, next) => {
    var id = req.query.Id
    product.findAll({where: { Rol:1, ParentId:0, Id:id }}).then(products => {
        if (products.length > 0) {
            res.json({
                status: true,
                message: 'products find successfully',
                data: products
            });
        } else {
            res.json({
                status: false,
                message: 'products not found',
                data: []
            });
        }
        //res.json(products);
    }).catch(err => {
        console.log('Error ' + err);
    });
});
module.exports = router;