
const express = require('express');
const cart = require('../models/model/Cart.js')
const router = express.Router();

router.get('/getaddtocart', (req, res, next) => {
    //var cid = req.body.cid;
    var cid = req.query.cid.trim();
    cart.findAll({ where: { CID: cid } }).then(data => {
        if(order.length > 0){
            res.json({
                status: true,
                message: 'cart find successfully',
                data: data
            });
        } else {
            res.json({
                status: false,
                message: 'cart not found',
                data: []
            });
        }  
        //res.json(add_to_carts);
    }).catch(err => {
        console.log('Error ' + err);
    });
});

router.post('/addtocart', (req, res, next) => {
    //  console.log(req.body);
    if (!req.body) {
        res.status(400);
        res.json({ error: 'Bad data request' + req.body });
    }
    else {
        cart.create(req.body).then(data => {
            if(data.Id > 0){
                res.json({
                    status: true,
                    message: 'add to cart successfully',
                    data: data
                });
            } else {
                res.json({
                    status: false,
                    message: 'order not found',
                    data: []
                });
            }
        }).catch(err => {
            console.log('Error :' + err);
        });
    }
});

module.exports = router;