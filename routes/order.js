const express = require('express');
const Coupon = require('../models/model/Coupon.js');
const Order = require('../models/model/Order.js');
const router = express.Router();

router.get('/getcoupon', (req, res, next) => {
    var coupon = req.query.coupon; // req.body.CouponNo;
     Coupon.findAll({
        where: {
            CouponNo: coupon
        }
    }).then(coupon => {
        if (coupon.length > 0) {
            res.json({
                status: true,
                message: 'offers find successfully',
                data: coupon
            });
        } else {
            res.json({
                status: false,
                message: 'offer not found',
                data: []
            });
        }
        //res.json(offers);
    }).catch(err => {
        console.log('Error ' + err);
    });
});
router.post('/updateaddress', (req, res, next) => {
    console.log('Update Address: ' + req.body.Address)
    if (!req.body) {
        res.status(400);
        res.json({
            error: 'Bad data request' + req.body
        });
    } else {
         Order.update({
            Area: req.body.Area,
            Address: req.body.Address,
            DeliveryTime: req.body.DeliveryTime,
            Reason: req.body.Reason
        }, {
            where: {
                Id: req.body.Id
            }
        }).then((data) => {
            if (!data) {
                res.status(400);
                res.json({
                    error: 'Bad data request' + req.body
                });
            } else {
                res.json({
                    customer: req.body,
                    status: true,
                    message: 'update address successfully'
                });
            }
        }).catch(err => {
            console.log('Error :' + err);
        });
    }
});

module.exports = router;