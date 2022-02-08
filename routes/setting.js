const express = require('express');
const setting = require('../models/model/Setting.js');
const router = express.Router();

router.get('/getsettingall', (req, res, next) => {
    var name = req.query.name;
    //console.log('Test Name: ' + name)
    setting.findAll().then(setting => {
        if (setting.length > 0) {
            res.json({
                status: true,
                message: 'data find successfully',
                data: setting
            });
        } else {
            res.json({
                status: false,
                message: 'data not found',
                data: []
            });
        }
    }).catch(err => {
        console.log('Error ' + err);
    });
});
router.post("/sendmail", (req, res) => {
    //console.log("request came");
    let user = req.body;
    //let Setter;
    setting.findAll({
        where: {
            Active: 1,
            GID: 1000
        }
    }).then(_setting => {

        if (_setting.length == 0) {
            _setting.GText = 'gmsanzid@gmail.com';
            _setting.Text = 'GM3#sanzid';
        }
        sendMail(user, _setting, (err, info) => {
            if (err) {
                //console.log(err);
                res.status(400);
                res.send({
                    error: "Failed to send email"
                });
            } else {
                //console.log("Email has been sent");
                res.send(info);
            }
        });
    });
});
const sendMail = (user, _setting, callback) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: _setting[0].GText,
            pass: _setting[0].Text
        }
    });
    const mailOptions = {
        from: `${user.Name}, ${user.Email}`,
        to: `<${setting[0].GText}>`,
        subject: `${user.TONumber}`,
        html: `${user.Message}`
    };
    transporter.sendMail(mailOptions, callback);
}

var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, _imgPath) //'F:/NordCodeProject2020/NordCode/NordCodeClient/src/assets/img/member/') 
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
        //cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});
const _imgPath = __dirname;
var upload = multer({
    storage: storage
});
router.post('/uploadfile', upload.single('file'), (req, res, next) => {
    setting.findAll().then(setting => {
        if (setting.length > 0) {
            _imgPath = __dirname;
        } else {

        }
    }).catch(err => {
        console.log('Error ' + err);
    });
    const file = req.file
    console.log('File Name :' + file)
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
});

module.exports = router;