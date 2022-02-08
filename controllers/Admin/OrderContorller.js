var OrderModel = require('../../models/admin/OrderModel');
async function OrderList(req, res) {
    var sql_query = "select * from ecom_orders where OrderStatus=1"; //"select * from ecom_orders where orderstatus=1; select * from ecom_customers";
    OrderModel.select_query(sql_query).then((data) => {
        var sql = "select * from ecom_customer_s";
        OrderModel.select_query(sql).then((_data) => {
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('Admin/Order/OrderList.ejs', {
                title: 'http://www.americantmartbd.com | User',
                content: 'Order Information',
                data: data,
                _data: _data,
                action: "OrderList",
                controller: 'Order'
            });
        });
    }).catch(function (err) {
        console.log(err);
        res.status(500).send({
            error: err
        });
    });
};
exports.OrderList = OrderList;
async function OrderCompletedList(req, res) {
    var sql_query = "select * from ecom_orders where OrderStatus in(2,3,4);"; // select * from ecom_customers";
    OrderModel.select_query(sql_query).then((data) => {
        var sql = "select * from ecom_customer_s";
        OrderModel.select_query(sql).then((_data) => {
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('Admin/Order/OrderCompletedList.ejs', {
                title: 'http://www.americantmartbd.com | User',
                content: 'Order Information',
                data: data,
                _data: _data,
                action: "OrderCompletedList",
                controller: 'Order'
            });
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            error: err
        });
    });
};
exports.OrderCompletedList = OrderCompletedList;
async function OrderDetails(req, res) {
    var sql_query = "select * from ecom_orders where TONumber='" + req.params.id + "'";
    var sql_details = "select * from ecom_orderdetails where TONumber='" + req.params.id + "'";
    var sql_cus = "select * from ecom_customers where CID=(select CustomerId from ecom_orders where TONumber='" + req.params.id + "' LIMIT 1)"; // convert (nvarchar(20) ,(select top 1 CustomerId from ecom_orders where TONumber='" + req.params.id + "'))";
    var sql_service = "select * from ecom_serviceman;";
    OrderModel.select_query(sql_query).then((data) => {
        OrderModel.select_query(sql_details).then((data_details) => {
            OrderModel.select_query(sql_cus).then((data_customer) => {
                OrderModel.select_query(sql_service).then((data_service) => {
                    res.set('content-type', 'text/html; charset=mycharset');
                    res.render('Admin/Order/OrderDetails.ejs', {
                        title: 'http://www.americantmartbd.com | User',
                        content: 'Order Information',
                        data: data,
                        data_details: data_details,
                        data_customer: data_customer,
                        data_service: data_service,
                        action: "OrderList",
                        controller: 'Order'
                    });
                });
            });
        });
    }).catch(function (err) {
        console.log(err);
        res.status(500).send({
            error: err
        });
    });
};
exports.OrderDetails = OrderDetails;
async function OrderPrint(req, res) {
    var sql_query = "select * from ecom_orders where TONumber='" + req.params.id + "'";
    var sql_details = "select * from ecom_orderdetails where TONumber='" + req.params.id + "'";
    var sql_customer = "select * from ecom_customer_s";
    OrderModel.select_query(sql_query).then((data) => {
        OrderModel.select_query(sql_details).then((data_details) => {
            OrderModel.select_query(sql_customer).then((data_customer) => {
                res.set('content-type', 'text/html; charset=mycharset');
                res.render('Admin/Order/OrderPrint.ejs', {
                    title: 'http://www.americantmartbd.com | User',
                    content: 'Order Information',
                    action: "OrderList",
                    controller: 'Order',
                    data: data,
                    data_details: data_details,
                    data_customer: data_customer
                });
            });
        });
    }).catch(function (err) {
        console.log(err);
        res.status(500).send({
            error: err
        });
    });
};
exports.OrderPrint = OrderPrint;
async function OrderUpdate(req, res) {
    var input = req.body;
    var sql_query = "update ecom_orders set OID=" + input.OID + ", OrderStatus=" + input.OrderStatus + " where TONumber='" + input.TONumber + "';";
    console.log(sql_query);
    OrderModel.select_query(sql_query).then((data) => {
        if (data) {
            console.log('data updated');
        }
    });
    return "Submit Successfully";
};
exports.OrderUpdate = OrderUpdate;

async function FlashUpdate(req, res) {
    var input = req.body;
    console.log('flash update : ' + JSON.stringify(input.ProductList));
    // var offerId = Math.floor(1000000000 + Math.random() * 9000000000);
    var offerId = Math.floor(1000000 + Math.random() * 9000000);
    var sql_query = "INSERT INTO `ecom_flashes`(`OfferId`, `Name`, `Name_BN`, `OfferExpiry`, `IsCombo`, `TrackedId`, `IsDelete`, `Active`) VALUES ('" +
        offerId + "','" + input.OfferText + "','" + input.OfferText_BN + "','" + input.OfferExpiry + "',1,11,0,1)";

    OrderModel.insert(sql_query).then((data) => {
        if (data) {
            var flashId = data[0];
            var _flashDetails = JSON.parse(JSON.stringify(req.body.ProductList));
            if (_flashDetails.length > 0) {
                //console.log('data updated :' + _flashDetails[0].pid);
                _flashDetails.forEach((fd) => {
                   // console.log(fd.pid);
                    var sql_fd = "INSERT INTO `ecom_flash_details`(`PID`, `FlashId`, `PName`, `PName_BN`,`ImgPath`,`Discount`, `MRP`, `UnitPrice`, `OfferPrice`, `OfferText`, `UnitsInStock`, `IsPercent`, `IsCombo`, `TrackedId`, `IsDelete`, `Active`) VALUES ('" +
                        fd.pid + "','" + flashId + "','" + fd.name + "','" + fd.name + "','" + fd.imagePath + "','" + fd.discount + "','" + fd.price + "','" + fd.price + "','" + fd.offer + "','" + fd.text + "','" + fd.unitInStock + "',1,0,11,0,1)";
                        console.log(sql_fd);

                    OrderModel.insert(sql_fd).then((flash) => {})
                });

            }
            //console.log('data updated');
            return "Submit Successfully";
        }
    });
}
exports.FlashUpdate = FlashUpdate;

async function FlashList(req, res) {
    var sql_query = "select * from ecom_flashes where OrderStatus=1"; //"select * from ecom_orders where orderstatus=1; select * from ecom_customers";
    OrderModel.select_query(sql_query).then((data) => {
        var sql = "select * from ecom_flashdetails";
        OrderModel.select_query(sql).then((_data) => {
            res.set('content-type', 'text/html; charset=mycharset');
            res.render('Admin/Order/OrderList.ejs', {
                title: 'http://www.americantmartbd.com | User',
                content: 'Order Information',
                data: data,
                _data: _data,
                action: "OrderList",
                controller: 'Order'
            });
        });
    }).catch(function (err) {
        console.log(err);
        res.status(500).send({
            error: err
        });
    });
};
exports.FlashList = FlashList;