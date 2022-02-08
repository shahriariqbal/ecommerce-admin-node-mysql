var UserModel = require('../../models/admin/UserModel.js');

async function Login(req, res) {
    errorData = {};
    data = {};
    if (req.method == "POST") {
        req.checkBody('Email', 'Email is required').notEmpty();
        req.checkBody('Password', 'Password is required').notEmpty();
        var errors = req.validationErrors();
        if (errors) {
            if (errors.length > 0) {
                errors.forEach((err)=> {
                    var field1 = String(err.param);
                    var msg = err.msg;
                    errorData[field1] = msg;
                });
            }
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('Admin/Auth/login.ejs', {
                page_title: "Admin - Login",
                data: data,
                errorData: errorData
            });
        } else {
            var sql_query = "select * from ecom_users where username='" + req.body.Email + "' and password='" + req.body.Password + "'";
            UserModel.select(sql_query).then((data) => {
                if (data.length > 0) {
                    req.session.LoginUser = JSON.stringify(data);
                    res.redirect('/Admin/Index');
                } else {
                    res.set('content-type', 'text/html; charset=mycharset');
                    res.render('Admin/Auth/login.ejs', {
                        page_title: "Admin - Login",
                        data: data,
                        errorData: errorData
                    });
                }
            }).catch((err) => {
                res.status(500).send({
                    error: err + "test"
                });
            });
        }
    } else {
        res.set('content-type', 'text/html; charset=mycharset');
        res.render('Admin/Auth/login.ejs', {
            title: 'www.americantmartbd.com | Login',
            content: 'Create by Mintu <gmsanzid@gmail.com>',
            data: data
        });
    }
};
exports.Login = Login;


async function logout(req, res) {

    // res.set('contennt-type' , 'text/html; charset=mycharset'); 
    /*  data = {}; LoginUser = {}; errorData = {};
      if(req.session){
          req.session.destroy(function (err) {
              //res.redirect('/'); //Inside a callback… bulletproof!
              res.redirect('/Admin/login');  
          });  
     }   */
    res.redirect('/');
};
exports.logout = logout;