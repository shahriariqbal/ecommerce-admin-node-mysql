
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var User = require('../models/model/User.js');
const router = express.Router();

router.post('/register', function (req, res) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    }
    jwt.sign({ user }, 'secretkey', (err, token) => {
        res.json({ token });
    });

});

router.get('/me', function (req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, 'secretkey', function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        res.status(200).send(decoded);
    });
});

module.exports = router;