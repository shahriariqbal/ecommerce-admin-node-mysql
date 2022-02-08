var ServiceModel = require('../../models/admin/ServicesModel.js');
async function ServiceList(req, res) {
    var sql_query = "SELECT * FROM `ecom_serviceman` WHERE Active = 1";
    ServiceModel.select(sql_query).then((data) => {
        res.set('content-type', 'text/html; charset=mycharset');
        res.render('Admin/Service/ServiceList.ejs', {
            title: 'http://www.americantmartbd.com | Employee',
            content: 'Employee',
            data: data,
            action: "ServiceList",
            controller: 'Service'
        });
    }).catch( (err)=>{
        console.log(err);
        res.status(500).send({
            error: err
        });
    });
};
exports.ServiceList = ServiceList;
async function ServiceEntry(req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    errorData = {};
    data = {};
    if (req.method == "POST") {
        //console.log(req.body);
        req.checkBody('SName', 'Name is required').notEmpty();
        req.checkBody('Cperson', 'Contact Person is required').notEmpty();
        req.checkBody('Phone', 'Phone is required').notEmpty();
        req.checkBody('Email', 'Email is required').notEmpty();
        req.checkBody('Address1', 'Address is required').notEmpty();
        var errors = req.validationErrors();
        if (errors) {
            if (errors.length > 0) {
                errors.forEach(function (errors1) {
                    var field1 = String(errors1.param);
                    var msg = errors1.msg;
                    errorData[field1] = msg;
                });
            }
            //  console.log(errors);
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('Admin/Service/ServiceEntry.ejs', {
                title: 'http://www.americantmartbd.com | New Employee',
                errors: errors,
                content: 'Employee Information',
                data: data,
                action: "ServiceEntry",
                controller: 'Service'
            });
        } else {
            var sql_query = "insert into ecom_serviceman(name, ContactPerson,Phone, Email, Address1, Active) values('" + input.SName + "', '" + input.Cperson + "','" + input.Phone + "','" + input.Email + "','" + input.Address1 + "', 1)";
            console.log(sql_query);
            ServiceModel.insert(sql_query);
            res.redirect('/Admin/Service/ServiceList');
        }
    } else {
        var sql_query  = "select gid,max(gtext) gtext from ecom_settings group by gid"
        ServiceModel.select_group(sql_query).then((data)=> {
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('Admin/Service/ServiceEntry.ejs', {
                title: 'http://www.americantmartbd.com | Employee Entry',
                content: 'Employee',
                data: data,
                action: "ServiceEntry",
                controller: 'Service'
            });

        }).catch(function (err) {
            res.status(500).send({
                error: err
            });
        });

    }
};
exports.ServiceEntry = ServiceEntry;
async function ServiceEdit(req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    errorData = {};
    data = {};
    if (req.method == "POST") {
        req.checkBody('SName', 'Name is required').notEmpty();
        req.checkBody('Cperson', 'Contact Person is required').notEmpty();
        req.checkBody('Phone', 'Phone is required').notEmpty();
        req.checkBody('Email', 'Email is required').notEmpty();
        req.checkBody('Address1', 'Address is required').notEmpty();
        var errors = req.validationErrors();
        if (errors) {
            if (errors.length > 0) {
                errors.forEach((err)=> {
                    var fd = String(err.param);
                    var msg = err.msg;
                    errorData[fd] = msg;
                });
            }
            // console.log(errors);
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('Admin/Service/ServiceEdit.ejs', {
                title: 'http://www.americantmartbd.com | Employee Entry',
                errors: errors,
                content: 'Employee Information',
                data: data,
                action: "ServiceEdit",
                controller: 'Service'
            });
        } else {
            var sql_query = "Update ecom_serviceman set Name='" + input.SName + "', ContactPerson='" + input.Cperson + "',Phone='" + input.Phone + "', Email='" + input.Email + "', address1='" + input.Address1 + "' where Id=" + req.params.id;
            ServiceModel.insert(sql_query);
            res.redirect('/Admin/service/ServiceList');
        }
    } else {
        var sql_query = "select * from ecom_serviceman where Id=" + req.params.id;
        ServiceModel.selectByQuery(sql_query).then((data)=> {
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('Admin/Service/ServiceEdit.ejs', {
                title: 'http://www.americantmartbd.com | Employee Edit',
                content: 'Employee',
                data: data,
                action: "ServiceEdit",
                controller: 'Service'
            });
        }).catch(function (err) {
            res.status(500).send({
                error: err
            });
        });
    }
};
exports.ServiceEdit = ServiceEdit;