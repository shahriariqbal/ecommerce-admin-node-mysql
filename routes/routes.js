var express = require("express");
var router = express.Router();

var HomeController = require("../controllers/home/HomeController.js");
var AuthController = require("../controllers/Admin/AuthController.js");
var BasicContorller = require("../controllers/Admin/BasicContorller.js");
var AdHomeController = require("../controllers/Admin/HomeController.js");
var ProductContorller = require("../controllers/Admin/ProductContorller.js");
var SupplierContorller = require("../controllers/Admin/SupplierContorller.js");
var UserContorller = require("../controllers/Admin/UserContorller.js");
var SupplierContorller = require("../controllers/Admin/SupplierContorller.js");
var CustomerContorller = require("../controllers/Admin/CustomerContorller.js");
var OrderContorller = require("../controllers/Admin/OrderContorller.js");
var ServiceContorller = require("../controllers/Admin/ServiceContorller.js");
var FlashContorller = require("../controllers/Admin/FlashContorller.js");
//api
var ApiController = require("../controllers/API/ApiController.js");

//api
router.get("/api/OrderSubmit", ApiController.OrderSubmit);

router.post("/api/OrderSubmit", ApiController.OrderSubmit);
router.post("/api/ProfileUpdate", ApiController.ProfileUpdate);
router.post("/api/signup", ApiController.signup);
router.post("/api/signin", ApiController.signin);
router.post("/api/login", ApiController.login);
router.post("/api/google_login", ApiController.google_login);

router.get("/Login", HomeController.Login);

router.get("/", AuthController.Login);
router.post("/", AuthController.Login);
router.get("/logout", AuthController.logout);

router.get("/admin/basic/basiclist", BasicContorller.BasicList);

router.get("/admin/basic/basicentry", BasicContorller.BasicEntry);

router.post("/admin/basic/basicentry", BasicContorller.BasicEntry);

router.get("/admin/basic/basicedit/:id", BasicContorller.BasicEdit);

router.post("/admin/basic/basicedit/:id", BasicContorller.BasicEdit);

router.get("/admin/supplier/SupplierList", SupplierContorller.SupplierList);
router.get("/admin/supplier/SupplierEntry", SupplierContorller.SupplierEntry);
router.post("/admin/supplier/SupplierEntry", SupplierContorller.SupplierEntry);
router.get("/admin/supplier/SupplierEdit/:id", SupplierContorller.SupplierEdit);
router.post(
  "/admin/supplier/SupplierEdit/:id",
  SupplierContorller.SupplierEdit
);

//service man
router.get("/admin/service/serviceList", ServiceContorller.ServiceList);
router.get("/admin/service/serviceEntry", ServiceContorller.ServiceEntry);
router.post("/admin/service/serviceEntry", ServiceContorller.ServiceEntry);
router.get("/admin/service/serviceEdit/:id", ServiceContorller.ServiceEdit);
router.post("/admin/service/serviceEdit/:id", ServiceContorller.ServiceEdit);

router.get("/admin/user/userList", UserContorller.UserList);
router.get("/admin/user/userentry", UserContorller.UserEntry);
router.post("/admin/user/userentry", UserContorller.UserEntry);
router.get("/admin/user/useredit/:id", UserContorller.UserEdit);
router.post("/admin/user/useredit/:id", UserContorller.UserEdit);
/// customer info

router.get("/admin/customer/CustomerList", CustomerContorller.CustomerList);
router.get("/admin/customer/Customerentry", CustomerContorller.CustomerEntry);
router.post("/admin/customer/Customerentry", CustomerContorller.CustomerEntry);
router.get("/admin/customer/Customeredit/:id", CustomerContorller.CustomerEdit);
router.post(
  "/admin/customer/Customeredit/:id",
  CustomerContorller.CustomerEdit
);

//orders
router.get("/admin/flash/FlashList", OrderContorller.FlashList);
router.post("/admin/flash/FlashUpdate", OrderContorller.FlashUpdate);

router.get("/admin/order/OrderList", OrderContorller.OrderList);
router.post("/admin/order/OrderUpdate", OrderContorller.OrderUpdate);
router.get(
  "/admin/order/OrderCompletedList",
  OrderContorller.OrderCompletedList
);
router.get("/admin/order/orderdetails/:id", OrderContorller.OrderDetails);
router.get("/admin/order/OrderPrint/:id", OrderContorller.OrderPrint);

router.get("/admin/product/CategoryEntry", ProductContorller.CategoryEntry);
router.post("/admin/product/CategoryEntry", ProductContorller.CategoryEntry);
router.get("/admin/product/CategoryEdit/:id", ProductContorller.CategoryEdit);
router.post("/admin/product/CategoryEdit/:id", ProductContorller.CategoryEdit);
router.get("/admin/product/CategoryList", ProductContorller.CategoryList);

router.get("/admin/product/productList", ProductContorller.ProductList);
router.get("/admin/product/productEntry", ProductContorller.ProductEntry);
router.post("/admin/product/productEntry", ProductContorller.ProductEntry);
router.get("/admin/product/productEdit/:id", ProductContorller.ProductEdit);
router.post("/admin/product/productEdit/:id", ProductContorller.ProductEdit);

// flash sales
router.get("/admin/product/flashList", FlashContorller.FlashList);
router.get("/admin/product/flashEntry", FlashContorller.FlashEntry);
router.post("/admin/product/flashEntry", FlashContorller.FlashEntry);
router.get("/admin/product/flashEdit/:id", FlashContorller.FlashEdit);
router.post("/admin/product/flashEdit/:id", FlashContorller.FlashEdit);

router.get("/admin/Product/images/:id", ProductContorller.images);
router.post("/admin/Product/images/:id", ProductContorller.images);
router.get("/admin/product/deleteImage/:id", ProductContorller.deleteImage);
router.get(
  "/admin/product/setDefaultImage/:id/:pid",
  ProductContorller.setDefaultImage
);

router.get("/admin/Index", AdHomeController.Index);
module.exports = router;

function requiredAuthentication(req, res, next) {
  next();
  console.log("session created");
  if (req.session) {
    LoginUser = req.session.LoginUser;
    if (LoginUser) {
      next();
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
}
