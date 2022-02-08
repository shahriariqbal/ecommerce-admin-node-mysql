const db = require('../config/db.js');
const user = require('../models/model/User.js');
const router = db.Express.Router();

router.get('/getuser', (req, res, next) => {
    console.log(req.query.username);
    req.checkParams('username', 'UserName is required').notEmpty();
    //req.checkBody('username', 'UserName is required').notEmpty();
    //req.checkBody('password', 'PassWord is required').notEmpty();
    var errors = req.validationErrors();
    if (errors.length > 0) {
        return res.json({
            status: failStatus,
            message: errors[0].msg,
        });
    } else {
        var username = req.query.username;
        console.log(Username);
        user.findAll({
            where: {
                Username: username,
                Password: req.query.Password
            }
        }).then(users => {
            if (users.length > 0) {
                res.json({
                    status: true,
                    message: 'users find successfully',
                    data: users
                });
            } else {
                res.json({
                    status: false,
                    message: 'data not found',
                    data: []
                });
            }
        }).catch(err => {
            res.send('Error :' + err);
        })
    }
});
router.post('/createuser', (req, res, next) => {
    req.checkBody('userName', 'UserName is required').notEmpty();
    var errors = req.validationErrors();
    if (errors.length > 0) {
        return res.json({
            status: failStatus,
            message: errors[0].msg,
        });
    }
    // if (!req.body) {
    //     res.status(400);
    //     res.json({
    //         error: 'Bad data request' + req.body
    //     });
    // } 
    else {
        user.create(req.body).then(user => {
            if (user.length > 0) {
                res.json({
                    status: true,
                    message: 'user create successfully',
                    data: user
                });
            } else {
                res.json({
                    status: false,
                    message: 'user not create',
                    data: []
                });
            }
        }).catch(err => {
            console.log('Error :' + err);
        });
    }
});
module.exports = router;