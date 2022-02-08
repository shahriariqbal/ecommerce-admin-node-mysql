const express = require("express");
const Customer = require("../models/model/Customer.js");
const Order = require("../models/model/Order.js");
const OrderDetails = require("../models/model/OrderDetails.js");
const router = express.Router();

router.get("/getcustomer", (req, res, next) => {
  var cmobileno = req.query.cmobileno.trim();
  console.log(req.query);
  var cid = parseInt(cmobileno);
  var toNomber = "+880";
  Customer.findAll({
    where: {
      MobileNo: cmobileno,
    },
    limit: 1,
  })
    .then((customer) => {
      if (customer.length == 0) {
        customer_obj = {
          CID: cid,
          TONumber: toNomber,
          MobileNo: cmobileno,
          CreateDate: new Date(),
          Delete: 0,
          Active: 1,
        };
        Customer.create(customer_obj)
          .then((data) => {
            res.json({
              status: true,
              msg: "User create successfully",
              customer: [
                {
                  CID: cid,
                  TONumber: toNomber,
                  MobileNo: cmobileno,
                  CreateDate: new Date(),
                  Delete: 0,
                  Active: 1,
                },
              ],
            });
          })
          .catch((err) => {
            console.log("Error :" + err);
          });
      } else {
        res.json({
          status: true,
          message: "customer find successfully",
          data: customer,
        });
      }
    })
    .catch((err) => {
      console.log("Error " + err);
    });
});
/* Updated /getcustomer api -> added password option */

router.get("/setcustomer", (req, res, next) => {
  var password = req.query.password;
  var cmobileno = req.query.cmobileno.trim();
  console.log(req.query);
  var cid = parseInt(cmobileno);
  var toNomber = "+880";

  Customer.findAll({
    where: {
      MobileNo: cmobileno,
    },
    limit: 1,
  })
    .then((customer) => {
      // console.log(customer[0].Password);
      if (customer.length == 0) {
        customer_obj = {
          CID: cid,
          TONumber: toNomber,
          MobileNo: cmobileno,
          Password: password,
          CreateDate: new Date(),
          Delete: 0,
          Active: 1,
        };
        Customer.create(customer_obj)
          .then((data) => {
            res.json({
              status: true,
              msg: "User create successfully",
              customer: [
                {
                  CID: cid,
                  TONumber: toNomber,
                  MobileNo: cmobileno,
                  Password: password,
                  CreateDate: new Date(),
                  Delete: 0,
                  Active: 1,
                },
              ],
            });
          })
          .catch((err) => {
            console.log("Error :" + err);
          });
      } else {
        //verify password
        if (password == customer[0].Password) {
          res.json({
            status: true,
            message: "customer find successfully",
            data: customer[0],
          });
        } else {
          res.json({
            status: false,
            message: "wrong password. please try again",
          });
        }
      }
    })
    .catch((err) => {
      console.log("Error " + err);
    });
});

/* customer register -> si */
router.post("/customer/register", (req, res, next) => {
  //validation
  req.checkBody("cmobileno", "Mobile number is required").notEmpty();
  req.checkBody("name", "Name is required").notEmpty();
  req.checkBody("address", "Address is required").notEmpty();
  req.checkBody("password", "Password is required").notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    let array = [];
    errors.forEach((e) => array.push(e.msg));
    return res.send(
      JSON.stringify({
        status: failStatus,
        message: array,
      })
    );
  } else {
    var cmobileno = req.body.cmobileno.trim();
    var cid = parseInt(cmobileno);
    var toNomber = "+880";
    //check if user already registered
    Customer.findAll({
      where: {
        MobileNo: cmobileno,
      },
      limit: 1,
    })
      .then((customer) => {
        if (customer.length == 0) {
          customer_obj = {
            CID: cid,
            TONumber: toNomber,
            MobileNo: cmobileno,
            Name: req.body.name,
            Address: req.body.address,
            Password: req.body.password,
            CreateDate: new Date(),
            Delete: 0,
            Active: 1,
          };
          Customer.create(customer_obj)
            .then((data) => {
              res.json({
                status: true,
                message: "Registered successfully!",
                data: data,
              });
            })
            .catch((err) => {
              console.log("Error :" + err);
            });
        } else {
          res.json({
            status: true,
            message: "This number is already registered. please try again.",
          });
        }
      })
      .catch((err) => {
        console.log("Error " + err);
      });
  }
});

router.get("/getcustomerinfo", (req, res, next) => {
  var cmobileno = req.query.cmobileno.trim();
  //console.log(cmobileno);
  Customer.findAll({
    where: {
      MobileNo: cmobileno,
    },
    limit: 1,
  })
    .then((customer) => {
      //console.log('total customer: ' + customer[0]);
      if (customer.length > 0) {
        res.json({
          status: true,
          message: "User find successfully",
          customer: customer,
        });
      } else {
        res.json({
          status: false,
          message: "User not found",
          customer: [],
        });
      }
    })
    .catch((err) => {
      console.log("Error " + err);
    });
});
router.post("/updatecustomer", (req, res, next) => {
  console.log("Update CId: " + req.body.Name);
  if (!req.body) {
    res.status(400);
    res.json({
      error: "Bad data request" + req.body,
    });
  } else {
    Customer.update(
      {
        Name: req.body.Name,
        Email: req.body.Email,
        Birthday: req.body.Birthday,
        UpdateBy: req.body.UpdateBy,
        UpdateDate: req.body.UpdateDate,
        TONumber: req.body.TONumber,
        TrackedId: req.body.TrackedId,
        FileUrl: req.body.FileUrl,
        Address: req.body.Address,
        //FileImage: req.body.FileImage
      },
      {
        where: {
          Id: req.body.Id,
        },
      }
    )
      .then((data) => {
        if (!data) {
          res.status(400);
          res.json({
            error: "Bad data request" + req.body,
          });
        } else {
          res.json({
            customer: req.body,
            status: true,
            message: "Update customer successfully",
          });
        }
      })
      .catch((err) => {
        console.log("Error :" + err);
      });
  }
});
router.get("/getorders", (req, res, next) => {
  let customer_id = req.query.customerid;
  Order.findAll({ where: { CustomerId: customer_id } })
    .then((order) => {
      //console.log(order);
      if (order) {
        res.json({
          status: true,
          message: "order find successfully",
          data: order,
        });
      } else {
        res.json({
          status: false,
          message: "order not found",
          data: [],
        });
      }
    })
    .catch((err) => {
      console.log("Error " + err);
    });
});
router.get("/getorder", (req, res, next) => {
  var temp_order_number = req.query.to_number.trim();
  Order.findAll({
    where: {
      TONumber: temp_order_number,
    },
    limit: 1,
  })
    .then((order) => {
      if (order.length > 0) {
        res.json({
          status: true,
          message: "order find successfully",
          data: order,
        });
      } else {
        res.json({
          status: false,
          message: "order not found",
          data: [],
        });
      }
    })
    .catch((err) => {
      console.log("Error " + err);
    });
});
router.get("/getorderdetails", (req, res, next) => {
  var temp_order_number = req.query.to_number.trim();
  OrderDetails.findAll({ where: { TONumber: temp_order_number } })
    .then((order_details) => {
      if (order_details.length > 0) {
        res.json({
          status: true,
          message: "order details find successfully",
          data: order_details,
        });
      } else {
        res.json({
          status: false,
          message: "order details not found",
          data: [],
        });
      }
    })
    .catch((err) => {
      console.log("Error " + err);
    });
});
router.post("/setorder", (req, res, next) => {
  var home_obj = {};
  if (!req.body) {
    res.status(400);
    res.json({
      error: "Bad data request" + req.body,
    });
  } else {
    var _orderDetails = JSON.parse(req.body.OrderDetails);
    if (_orderDetails.length > 0) {
      console.log(req.body);
      Order.create(req.body)
        .then((order) => {
          home_obj.order = order;
          var orderId = order.Id;
          // console.log(order.CustomerId);
          _orderDetails.forEach((order_details) => {
            order_details.OrderId = orderId;
            OrderDetails.create(order_details).then((product) => {});
          });
          res.json({
            status: true,
            message: "order submitted successfully",
            data: home_obj.order,
          });
        })
        .catch((err) => {
          console.log("Error :" + err);
          res.json({
            status: false,
            message: "order submitted failed !",
            order: [],
          });
        });
    } else {
      res.json({
        status: false,
        message: "order not submitted",
        order: [],
      });
    }
  }
});
router.post("/updateorder", (req, res, next) => {
  // res.json({
  //     data: req.body
  // });

  console.log("CID " + req.body.Id);
  if (!req.body) {
    res.status(400);
    res.json({ error: "Bad data request" + req.body });
  } else {
    Order.update(
      {
        Area: req.body.Area,
        Address: req.body.Address,
      },
      {
        where: {
          Id: req.body.Id,
        },
      }
    )
      .then((data) => {
        if (!data) {
          res.status(400);
          res.json({ error: "Bad data request" + req.body });
        } else {
          res.json({
            customer: req.body,
            status: true,
            message: "update order successfully",
          });
        }
      })
      .catch((err) => {
        console.log("Error :" + err);
      });
  }
});
router.post("/updateorderstatus", (req, res, next) => {
  console.log("ID " + req.body.Id);
  if (!req.body) {
    res.status(400);
    res.json({ error: "Bad data request" + req.body });
  } else {
    Order.update(
      { OrderStatus: req.body.OrderStatus },
      { where: { Id: req.body.Id } }
    )
      .then((data) => {
        if (!data) {
          res.status(400);
          res.json({ error: "Bad data request" + req.body });
        } else {
          res.json({
            customer: req.body,
            status: true,
            message: "update order status successfully",
          });
        }
      })
      .catch((err) => {
        console.log("Error :" + err);
      });
  }
});
module.exports = router;
