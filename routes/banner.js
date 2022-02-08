const express = require('express');
const banner = require('../models/model/Banner.js');
const router = express.Router();

router.get('/getbanner', (req, res, next) => {
    var is_home = req.query.is_home;
    banner.findAll({ where: { IsHomePage: is_home, IsActive : 1 }
    }).then(banner => {
        if (banner.length > 0) {
            res.json({
                status: true,
                message: 'banner find successfully',
                data: banner
            });
        } else {
            res.json({
                status: false,
                message: 'banner not found',
                data: []
            });
        }
    }).catch(err => {
        console.log('Error ' + err);
    });
});

module.exports = router;