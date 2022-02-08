
const express = require('express');
const login = require('../models/Login.js');

const router = express.Router();

router.get('/getlogin', (req, res, next)=> {
    login.findAll().then(logins =>{
        res.json(logins);
    }).catch(err => {
        res.send('Error :' + err);
    });
});

module.exports = router;