var banner = require('../../models/model/Banner.js');

async function get_banner_list(req, res) {
    home_obj = {};
    var is_home = req.query.is_home;
    let promise = new Promise((resolve, reject) => {
        banner.findAll({
            where: {
                IsHomePage: is_home,
                IsActive: 1
            }
        }).then(banners => {
            home_obj.banners = banners;
            console.log('promise call');
            resolve(home_obj);
        }).catch(err => {
            res.send('Error :' + err)
            reject(true);
        });

        //setTimeout(() => resolve(true), 5000) // resolve
        //console.log('promise call');
    });
    // wait for the promise to resolve
    let result = await promise;
    // console log the result (true)
    result.resolve(item => {
        console.log(item);
    });

    return result;
    // var promise = banner.select();
    // promise.then((data) => {
    //    await banner.findAll().then(banners => {
    //         res.json({
    //             status: true,
    //             message: 'Data loaded successfully',
    //             data: data
    //         });
    //         //home_obj.banners = banners;
    //     }).catch(err => {
    //         res.send('Error :' + err)
    //     });
    // }).catch(function (err) {
    //     console.log(err);
    //     res.status(500).send({
    //         error: err
    //     });
    //     //res.render('Admin/Basic/BasicList.ejs', {title: '24Bigbazar.com | Basic', content: 'Basic Information', data: data});
    // });


};
exports.get_banner_list = get_banner_list;

// async function SupplierEntry(req, res) {

//     const {
//         check,
//         validationResult
//     } = require('express-validator/check');
//     var input = JSON.parse(JSON.stringify(req.body));

//     errorData = {};
//     data = {};
//     if (req.method == "POST") {

//         console.log(req.body);
//         req.checkBody('SName', 'Name is required').notEmpty();
//         req.checkBody('Cperson', 'Contact Person is required').notEmpty();
//         req.checkBody('Phone', 'Phone is required').notEmpty();
//         req.checkBody('Email', 'Email is required').notEmpty();
//         req.checkBody('Address1', 'Address is required').notEmpty();
//         var errors = req.validationErrors();
//         if (errors) {
//             if (errors.length > 0) {
//                 errors.forEach(function (errors1) {
//                     var field1 = String(errors1.param);
//                     var msg = errors1.msg;
//                     errorData[field1] = msg;
//                 });
//             }
//             console.log(errors);
//             res.set('content-type', 'text/html; charset=mycharset');
//             res.render('Admin/Supplier/SupplierEntry.ejs', {
//                 title: '24Bigbazar.com | Basic Entry',
//                 errors: errors,
//                 content: 'Basic Information',
//                 data: data,
//                 action: "SupplierEntry",
//                 controller: 'Supplier'
//             });
//         } else {

//             var sqlquery = "insert into ecom_suppliers(name, ContactPerson,Phone, Email, address1) values('" + input.SName + "', '" + input.Cperson + "','" + input.Phone + "','" + input.Email + "','" + input.Address1 + "')";
//             console.log(sqlquery);
//             SupplierModel.insert(sqlquery);

//             res.redirect('/Admin/supplier/SupplierList');

//         }


//     } else {
//         var promise = SupplierModel.select_group();
//         promise.then(function (data) {
//             res.set('content-type', 'text/html; charset=mycharset');
//             res.render('Admin/Supplier/SupplierEntry.ejs', {
//                 title: '24Bigbazar.com | Supplier Entry',
//                 content: 'Supplier Information',
//                 data: data,
//                 action: "SupplierEntry",
//                 controller: 'Supplier'
//             });

//         }).catch(function (err) {
//             res.status(500).send({
//                 error: err
//             });
//         });

//     }
// };
// exports.SupplierEntry = SupplierEntry;

// async function SupplierEdit(req, res) {

//     // console.log('test');
//     const {
//         check,
//         validationResult
//     } = require('express-validator/check');
//     var input = JSON.parse(JSON.stringify(req.body));

//     errorData = {};
//     data = {};
//     if (req.method == "POST") {

//         console.log(req.body);
//         req.checkBody('SName', 'Name is required').notEmpty();
//         req.checkBody('Cperson', 'Contact Person is required').notEmpty();
//         req.checkBody('Phone', 'Phone is required').notEmpty();
//         req.checkBody('Email', 'Email is required').notEmpty();
//         req.checkBody('Address1', 'Address is required').notEmpty();
//         var errors = req.validationErrors();
//         if (errors) {
//             if (errors.length > 0) {
//                 errors.forEach(function (errors1) {
//                     var field1 = String(errors1.param);
//                     var msg = errors1.msg;
//                     errorData[field1] = msg;
//                 });
//             }
//             // console.log(errors);
//             res.set('content-type', 'text/html; charset=mycharset');
//             res.render('Admin/Supplier/SupplierEdit.ejs', {
//                 title: '24Bigbazar.com | Basic Entry',
//                 errors: errors,
//                 content: 'Basic Information',
//                 data: data,
//                 action: "SupplierEdit",
//                 controller: 'Supplier'
//             });
//         } else {

//             var sqlquery = "Update  ecom_suppliers set name='" + input.SName + "', ContactPerson='" + input.Cperson + "',Phone='" + input.Phone + "', Email='" + input.Email + "', address1='" + input.Address1 + "' where ID=" + req.params.id;
//             // console.log(sqlquery);
//             SupplierModel.insert(sqlquery);

//             res.redirect('/Admin/Supplier/SupplierList');

//         }


//     } else {
//         var sqlquery = "select * from ecom_suppliers where ID=" + req.params.id;
//         //  console.log(sqlquery);
//         var promise = SupplierModel.selectByQuery(sqlquery);
//         promise.then(function (data) {
//             res.set('content-type', 'text/html; charset=mycharset');
//             res.render('Admin/Supplier/SupplierEdit.ejs', {
//                 title: '24Bigbazar.com | Supplier Edit',
//                 content: 'Supplier Information',
//                 data: data.recordset,
//                 action: "SupplierEdit",
//                 controller: 'Supplier'
//             });

//         }).catch(function (err) {
//             res.status(500).send({
//                 error: err
//             });
//         });

//     }
// };
// exports.SupplierEdit = SupplierEdit;