var UserModel = require('../../models/admin/UserModel.js');
async function UserList(req, res) {
    var sql_query = "select * from ecom_users"; //; select * from ecom_roles;
    UserModel.select_query(sql_query).then((data) => {
        var sql = "select * from ecom_roles";
        UserModel.select_query(sql).then((_data) => {
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('Admin/User/UserList.ejs', {
                title: 'http://www.americantmartbd.com | User',
                content: 'User List',
                data: data,
                _data: _data,
                action: "UserList",
                controller: 'User'
            });
        });
    }).catch(function (err) {
        console.log(err);
        res.status(500).send({
            error: err
        });
    });
};
exports.UserList = UserList;
async function UserEntry(req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    errorData = {};
    data = {};
    if (req.method == "POST") {
        req.checkBody('Name', 'Name is required').notEmpty();
        req.checkBody('Username', 'User ID is required').notEmpty();
        // req.checkBody('Phone', 'Phone is required').notEmpty();
        req.checkBody('Email', 'Email is required').notEmpty();
        req.checkBody('RoleId', 'Role is required').notEmpty();
        // req.checkBody('Password', 'Password is required').notEmpty();
        // req.checkBody('CPassword', 'Password is required').notEmpty();
        // req.assert('CPassword', 'Password do not match').equals(req.body.Password);
        var errors = req.validationErrors();
        if (errors) {
            if (errors.length > 0) {
                errors.forEach(function (errors1) {
                    var field1 = String(errors1.param);
                    var msg = errors1.msg;
                    errorData[field1] = msg;
                });
            }
            UserModel.select_query("select * from ecom_roles").then((data) => {
                res.set('content-type', 'text/html; charset=mycharset');
                res.render('Admin/User/UserEntry.ejs', {
                    title: 'http://www.americantmartbd.com | User Entry',
                    content: 'User',
                    data: data,
                    action: "UserEntry",
                    controller: 'User'
                });
            })
        } else {
            var sql_query = "insert into ecom_users(Name, Username,Phone, Email, Password, RoleId, Active) values('" + input.Name + "', '" + input.Username + "','" + input.Phone + "','" + input.Email + "','" + input.Password + "','" + input.RoleId + "','" + input.Status + "')";
            console.log(sql_query);
            UserModel.insert(sql_query);
            res.redirect('/Admin/User/UserList');
        }
    } else {
        var promise = UserModel.select_query("select * from ecom_roles");
        promise.then(function (data) {
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('Admin/User/UserEntry.ejs', {
                title: 'http://www.americantmartbd.com | User Entry',
                content: 'User Information',
                data: data,
                action: "UserEntry",
                controller: 'User'
            });

        }).catch(function (err) {
            res.status(500).send({
                error: err
            });
        });

    }
};
exports.UserEntry = UserEntry;

async function UserEdit(req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    errorData = {};
    data = {};
    if (req.method == "POST") {

        req.checkBody('Name', 'Name is required').notEmpty();
        req.checkBody('Username', 'User ID is required').notEmpty();
        // req.checkBody('Phone', 'Phone is required').notEmpty();
        req.checkBody('Email', 'Email is required').notEmpty();
        req.checkBody('RoleId', 'Role is required').notEmpty();
        // req.checkBody('Password', 'Password is required').notEmpty();
        // req.checkBody('CPassword', 'Password is required').notEmpty();
        // req.assert('CPassword', 'Password do not match').equals(req.body.Password);
        var errors = req.validationErrors();
        if (errors) {
            if (errors.length > 0) {
                errors.forEach(function (errors1) {
                    var field1 = String(errors1.param);
                    var msg = errors1.msg;
                    errorData[field1] = msg;
                });
            }

            var sql_query = "select * from ecom_users where Id=" + req.params.id;
            UserModel.select_query(sql_query).then((data) => {
                var sql = "select * from ecom_roles";
                UserModel.select_query(sql).then((_data) => {
                    res.set('content-type', 'text/html; charset=mycharset');
                    res.render('Admin/User/UserEdit.ejs', {
                        title: 'http://www.americantmartbd.com | User Edit',
                        content: 'User Information',
                        data: data,
                        _data: _data,
                        action: "SupplierEdit",
                        controller: 'Supplier'
                    });
                });
            })
        } else {
            var sql_query = "update ecom_users set name='" + input.Name + "', username='" + input.Username + "',Phone='" + input.Phone + "', Email='" + input.Email + "', password='" + input.Password + "', RoleId=" + input.RoleId + ", Active='" + input.Status + "' Where Id=" + req.params.id;
            console.log(sql_query);
            UserModel.insert(sql_query);
            res.redirect('/Admin/user/UserList');
        }
    } else {
        var sql_query = "select * from ecom_users where Id=" + req.params.id;
        UserModel.select_query(sql_query).then((data) => {
            var sql = "select * from ecom_roles";
            UserModel.select_query(sql).then((_data) => {
                //console.log(data);
                res.set('content-type', 'text/html; charset=mycharset');
                res.render('Admin/User/UserEdit.ejs', {
                    title: 'http://www.americantmartbd.com | User Edit',
                    content: 'User',
                    data: data,
                    _data: _data,
                    action: "UserEdit",
                    controller: 'User'
                });
            });
        }).catch(function (err) {
            res.status(500).send({
                error: err
            });
        });

    }
};
exports.UserEdit = UserEdit;