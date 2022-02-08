const express = require('express');
const menu = require('../models/model/Menu.js')
const Product = require('../models/model/Product.js')
const router = express.Router();

router.get('/getmenus', (req, res, next) => {
    var role = req.query.role; //req.body.role;
     Product.findAll({
        where: {
            Active: 1,
            Rol: role
        },
        order: [
            ['Category', 'ASC'],
        ],
        attributes: ['Id', 'Route', 'IconName', ['PName', 'Text'], 'Description', 'ParentId', 'RankId']
    }).then(menus => {
        if (menus.length > 0) {
            res.json({
                status: true,
                message: "menus find successfully",
                data: menus
            });
        } else {
            res.json({
                status: false,
                message: 'menu not found',
                data: []
            });
        }

    }).catch(err => {
        console.log('Error ' + err);
    });
});


module.exports = router;