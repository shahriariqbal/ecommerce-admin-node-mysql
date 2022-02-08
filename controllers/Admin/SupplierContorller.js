var SupplierModel = require('../../models/admin/SuppliersModel.js');

async function SupplierList(req, res) {
    var sql_query = 'select * from ecom_suppliers'
    SupplierModel.select(sql_query).then((data) => {
        //console.log(data);
        res.set('content-type', 'text/html; charset=mycharset');
        res.render('Admin/Supplier/SupplierList.ejs', {
            title: 'americantmartbd.com | Supplier',
            content: 'Supplier Information',
            data: data,
            action: "SupplierList",
            controller: 'Supplier'
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            error: err
        });
    });
};
exports.SupplierList = SupplierList;

async function SupplierEntry(req, res) {
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
                errors.forEach((err) => {
                    var fd = String(err.param);
                    var msg = err.msg;
                    errorData[fd] = msg;
                });
            }
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('Admin/Supplier/SupplierEntry.ejs', {
                title: 'www.americantmartbd.com | Basic Entry',
                errors: errors,
                content: 'Basic Information',
                data: data,
                action: "SupplierEntry",
                controller: 'Supplier'
            });
        } else {
            var sql_query = "INSERT INTO `ecom_suppliers` (`Name`, `Phone`, `Email`, `Address1`, `Address2`, `ContactPerson`, `Status`) " +
                "values('" + input.SName + "', '" + input.Phone + "','" + input.Email + "','" + input.Address1 + "','" + input.Address2 + "','" + input.Cperson + "','1')";

            SupplierModel.insert(sql_query).then(data => {
                if (data) {
                    res.redirect('/Admin/Supplier/SupplierList');
                }
            });

            //res.redirect('/Admin/Supplier/SupplierList')
            // .then((data) => {
            // if (data) {
            //     res.redirect('Admin/Supplier/SupplierList');
            // }
            //});
        }
    } else {
        var sql_query = 'select gid, max(gtext) gtext from ecom_settings group by gid';
        SupplierModel.select_group(sql_query).then((data) => {
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('Admin/Supplier/SupplierEntry.ejs', {
                title: 'www.americantmartbd.com | Supplier Entry',
                content: 'Supplier Information',
                data: data,
                action: "SupplierEntry",
                controller: 'Supplier'
            });
        }).catch((err) => {
            res.status(500).send({
                error: err
            });
        });
    }
};
exports.SupplierEntry = SupplierEntry;

async function SupplierEdit(req, res) {
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
                errors.forEach((err) => {
                    var fd = String(err.param);
                    var msg = err.msg;
                    errorData[fd] = msg;
                });
            }
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('admin/product/categoryEdit.ejs', {
                title: 'http://www.americantmartbd.com | Supplier Entry',
                errors: errors,
                content: 'Supplier Entry',
                data: data,
                action: "SupplierEdit",
                controller: 'Supplier'
            });
            // res.set('content-type', 'text/html; charset=mycharset');
            // res.redirect('/admin/supplier/supplierList');

        } else {
            var sql_query = "Update ecom_suppliers set name='" + input.SName + "', ContactPerson='" + input.Cperson + "',Phone='" + input.Phone + "', Email='" + input.Email + "', address1='" + input.Address1 + "' where Id=" + req.params.id;
            //console.log(sql_query);
            SupplierModel.insert(sql_query);
            res.redirect('/admin/supplier/supplierList');
        }
    } else {
        var sql_query = "select * from ecom_suppliers where Id = " + req.params.id;
        SupplierModel.selectByQuery(sql_query).then((data) => {
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('Admin/Supplier/SupplierEdit.ejs', {
                title: 'http://www.http://www.americantmartbd.com | Supplier Edit',
                content: 'Supplier Edit',
                data: data,
                action: "SupplierEdit",
                controller: 'Supplier'
            });
           
        }).catch((err) => {
            res.status(500).send({
                error: err
            });
        });
    }
};
exports.SupplierEdit = SupplierEdit;