var OrderModel = require("../../models/admin/OrderModel.js");
var request = require("request");

async function OrderSubmit(req, res) {
  try {
    var input = JSON.parse(JSON.stringify(req.body));
    // console.log(input.OrderNo);
    //var auth_token = req.headers.authtoken;
    req.checkBody("OrderNo", "OrderNo is required").notEmpty();
    req.checkBody("CustomerId", "CustomerId is required").notEmpty();
    var errors = req.validationErrors();
    //  if(!auth_token){
    //      return res.send(JSON.stringify({
    //          "status": SessionExpireStatus,
    //          "message": 'Session Expired.',
    //      }));
    //  }
    if (errors) {
      return res.send(
        JSON.stringify({
          status: failStatus,
          message: errors[0].msg,
        })
      );
    } else {
      if (req.method == "POST") {
        // var date_time = moment().format("YYYY-MM-DD h:mm:ss a");
        var date_time = moment().format("YYYY-MM-DD");

        var data = input.OrderDetails;
        var discount = 0;
        var total = 0;
        for (var i = 0; i < data.length; i++) {
          discount = discount + data[i].Discount;
          total = total + data[i].totalPrice;
          var sql_query =
            "INSERT INTO ecom_order_detail_s (OrderId,TONumber,PID ,PName,PQty,ItemQty,UnitPrice ,NetPrice ,ImgPath ,CreateBy ,CreateDate, IsDelete,Active)" +
            " values(0,'" +
            input.OrderNo +
            "','" +
            data[i].PID +
            "','" +
            data[i].PName +
            "','" +
            data[i].Unit +
            "','" +
            data[i].Unit +
            "','" +
            data[i].UnitPrice +
            "','" +
            data[i].UnitPrice +
            "','" +
            data[i].ImgPath +
            "','" +
            input.CustomerId +
            "','" +
            date_time +
            "',0,1)";
          OrderModel.select_query(sql_query);
        }

        var _sql_query =
          "INSERT INTO ecom_orders (TONumber ,CustomerId, CouponId,Discount,Reason,TotalItemQty,DeliveryCharge,TotalPrice,NetPrice,Address,Area ,DeliveryTime,OrderStatus ,CreateBy ,CreateDate,IsDelete,Active) " +
          "VALUES('" +
          input.OrderNo +
          "','" +
          input.CustomerId +
          "','" +
          input.CouponId +
          "','" +
          discount +
          "','" +
          input.Reason +
          "',0,20,'" +
          total +
          "'," +
          total +
          ",'" +
          input.Address +
          "','" +
          input.Aria +
          "','" +
          input.DeliveryTime +
          "',1,'" +
          input.CustomerId +
          "','" +
          date_time +
          "','" +
          input.IsDelete +
          "','" +
          input.Active +
          "')";

        // console.log(sql);
        OrderModel.select_query(_sql_query);

        // // const CheckAuthentication = await Users.CheckAuthentication(auth_token);   // Check Authentication
        //  if(CheckAuthentication){
        //      const checkUser = await Users.getUserByid(input.user_id);
        //      console.log(checkUser);
        //  if(checkUser.length > 0){
        //      var updateData = {
        //         id    : input.user_id,
        //         device_token : input.device_token,
        //      };
        /*var saveRecord = await Users.updateUserData(updateData);    
                if(saveRecord){   
                    return res.send(JSON.stringify({  
                        "status": successStatus,
                        "message": 'User detail updated successfully.',  
                        "data": {},          
                    }));  
                }else{
                    return res.send(JSON.stringify({ 
                        "status": failStatus,  
                        "message": 'Data could  not updated. Please try again.',
                        "data": respondeArray  
                    })); 
                } */
        // }else{
        //     return res.send(JSON.stringify({
        //         "status": failStatus,
        //         "message": 'Invalid user Id.',
        //         "data": respondeArray
        //     }));
        // }
        //  }else{
        //      return res.send(JSON.stringify({
        //          "status": failStatus,
        //          "message": 'Session expired.',
        //          "data": respondeArray
        //      }));
        //  }
        return res.send(
          JSON.stringify({
            status: successStatus,
            message: "Submit successfully.",
          })
        );
      }
    }
  } catch (err) {
    return res.send(
      JSON.stringify({
        status: failStatus,
        message: err,
      })
    );
  }
  return false;
}
exports.OrderSubmit = OrderSubmit;

async function ProfileUpdate(req, res) {
  try {
    const { check, validationResult } = require("express-validator/check");
    var reaponseArr = "{}";
    var input = JSON.parse(JSON.stringify(req.body));
    console.log(input);
    //var auth_token = req.headers.authtoken;
    req.checkBody("CID", "Customer ID is required").notEmpty();
    req.checkBody("Name", "Name is required").notEmpty();
    req.checkBody("Address", "Address is required").notEmpty();
    var errors = req.validationErrors();

    if (errors) {
      return res.send(
        JSON.stringify({
          status: failStatus,
          message: errors[0].msg,
        })
      );
    } else {
      if (req.method == "POST") {
        var imgname = "";
        msg = "Submit successfully.";
        if (req.files && req.files.images !== "undefined") {
          let images = req.files.images;

          imgname = input.CID + ".png";
          msg = imgname;
          // console.log(imgname);
          filename = images.name;
          images.mv("assets/upload/" + imgname, function (err) {
            if (err) {
              console.log(err);
              req.flash("error", "Could not upload image. Please try again!");
              res.locals.message = req.flash();
            }
          });
        } else {
          console.log(imgname);
        }
        var sql =
          "update ecom_customer_s set  name= '" +
          input.Name +
          "', MobileNo='" +
          input.MobileNo +
          "', Address='" +
          input.Address +
          "', area='" +
          input.Area +
          "', email='" +
          input.Email +
          "', FileImage ='" +
          imgname +
          "' where CID='" +
          input.CID +
          "'";

        OrderModel.select_query(sql);
        return res.send(
          JSON.stringify({
            status: successStatus,
            message: msg,
          })
        );
      }
    }
  } catch (err) {
    return res.send(
      JSON.stringify({
        status: failStatus,
        message: err,
      })
    );
  }
  return false;
}
exports.ProfileUpdate = ProfileUpdate;

async function signup(req, res) {
  try {
    var input = JSON.parse(JSON.stringify(req.body));
    //console.log(input);
    //var auth_token = req.headers.authtoken;
    req.checkBody("MobileNo", "MobileNo ID is required").notEmpty();
    req.checkBody("Name", "Name is required").notEmpty();
    req.checkBody("Address", "Address is required").notEmpty();
    var errors = req.validationErrors();
    if (errors) {
      return res.send(
        JSON.stringify({
          status: failStatus,
          message: errors[0].msg,
        })
      );
    } else {
      if (req.method == "POST") {
        var imgname = "";
        msg = "Submit successfully.";
        if (req.files && req.files.images !== "undefined") {
          let images = req.files.images;
          imgname = input.CID + ".png";
          msg = imgname;
          filename = images.name;
          images.mv("assets/upload/" + imgname, function (err) {
            if (err) {
              console.log(err);
              req.flash("error", "Could not upload image. Please try again!");
              res.locals.message = req.flash();
            }
          });
        } else {
          console.log(imgname);
        }
        var cid = parseInt(input.MobileNo);
        var to_number = "11_" + cid;
        var otp = Math.floor(1000 + Math.random() * 9000);
        var message =
          "Your mobile verification code is " +
          otp +
          ", valid till 5 minutes,HR, FashionClub, Dhaka-1217.";

        ///////code for NodeJs - Request OTP//////////////////
        // var options = {
        //     'method': 'POST',
        //     'url': 'http://66.45.237.70/api.php?username=01704164912&password=CK37SXMD&number=88' + input.MobileNo + '&message=' + message,
        //     'headers': {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // };
        // request(options, (error, response) => {
        //     if (error) {
        //         throw new Error(error);
        //     } else {
        var select_query =
          "SELECT * FROM `ecom_customers` WHERE MobileNo = " + input.MobileNo;
        OrderModel.select_query(select_query).then((returns, error) => {
          console.log("returns : " + returns.length);
          if (returns.length > 0) {
            var update_query =
              "UPDATE `ecom_customers` SET OTP =" +
              otp +
              ", Address='" +
              input.Address +
              "', Name='" +
              input.Name +
              "' WHERE MobileNo = " +
              input.MobileNo;

            OrderModel.update_query(update_query).then((returns, error) => {
              console.log("returns : " + otp);
              if (returns.length > 0) {
                res.json({
                  status: true,
                  message: "registration update success",
                  data: {
                    otp: otp,
                  },
                });
              } else {
                res.json({
                  status: false,
                  message: "registration failed",
                  data: {
                    otp: "",
                  },
                });
              }
            });
          } else {
            var sql =
              "insert into ecom_customers(TONumber,Name,Address,area,email,MobileNo,FileImage,cid, password, OTP, IsDelete, Active) values( '" +
              to_number +
              "','" +
              input.Name +
              "', '" +
              input.Address +
              "', '" +
              input.Area +
              "', '" +
              input.Email +
              "','" +
              input.MobileNo +
              "',  '" +
              imgname +
              "','" +
              cid +
              "','" +
              input.Password +
              "'," +
              otp +
              ",0,1)";

            OrderModel.insert(sql).then((returns, error) => {
              console.log("returns : " + otp);
              if (returns.length > 0) {
                res.json({
                  status: true,
                  message: "registration success",
                  data: {
                    otp: otp,
                  },
                });
              } else {
                res.json({
                  status: false,
                  message: "registration failed",
                  data: {
                    otp: "",
                  },
                });
              }
            });
          }
        });
        //    }
        //});
        ///////code for NodeJs - Request OTP//////////////////
      }
    }
  } catch (err) {
    return res.send(
      JSON.stringify({
        status: failStatus,
        message: err,
      })
    );
  }
  return false;
}
exports.signup = signup;

async function signin(req, res) {
  try {
    var input = JSON.parse(JSON.stringify(req.body));
    req.checkBody("MobileNo", "MobileNo ID is required").notEmpty();
    //req.checkBody('Password', 'Password is required').notEmpty();
    var errors = req.validationErrors();

    if (errors) {
      return res.send(
        JSON.stringify({
          status: failStatus,
          message: errors[0].msg,
        })
      );
    } else {
      if (req.method == "POST") {
        /////code for NodeJs - Request OTP//////////////////
        // var otp = Math.floor(1000 + Math.random() * 9000);
        // var message = 'Your mobile verification code is ' + otp + ', valid till 5 minutes,HR, FashionClub, Dhaka-1217.';

        // var options = {
        //     'method': 'POST',
        //     'url': 'http://66.45.237.70/api.php?username=01704164912&password=CK37SXMD&number=88' + input.MobileNo + '&message=' + message,
        //     'headers': {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // };
        // request(options, (error, response) => {
        //     if (error) {
        //         throw new Error(error);
        //     } else {
        //         var update_query = "UPDATE `ecom_customers` SET OTP = " + otp + " WHERE MobileNo = " + input.MobileNo + "' And Active = 1";
        //         OrderModel.update_query(update_query).then((returns, error) => {

        //             if (returns.length > 0) {
        //                 var select_query = "SELECT * FROM `ecom_customers` WHERE MobileNo = '" + input.MobileNo + "' and Active = 1";
        //                 OrderModel.select_query(select_query).then((returns) => {
        //                     console.log('returns : ' + returns.length);
        //                     if (returns.length > 0) {
        //                         res.json({
        //                             status: true,
        //                             message: 'data find successfully',
        //                             data: returns[0]
        //                         });
        //                     } else {
        //                         res.json({
        //                             status: false,
        //                             message: 'data not found',
        //                             data: {}
        //                         });
        //                     }
        //                 });
        //             } else {
        //                 res.json({
        //                     status: false,
        //                     message: 'failed',
        //                     data: {}
        //                 });
        //             }
        //         });
        //     }
        // });

        var select_query =
          "SELECT * FROM `ecom_customers` WHERE MobileNo = '" +
          input.MobileNo +
          "' and Active = 1";
        OrderModel.select_query(select_query).then((returns) => {
          console.log("returns : " + returns.length);
          if (returns.length > 0) {
            res.json({
              status: true,
              message: "data find successfully",
              data: returns[0],
            });
          } else {
            res.json({
              status: false,
              message: "data not found",
              data: {},
            });
            //return res.send(data);
          }
        });
      }
    }
  } catch (err) {
    return res.send(
      JSON.stringify({
        status: failStatus,
        message: err,
      })
    );
  }
  return false;
}
exports.signin = signin;

async function login(req, res) {
  try {
    var input = JSON.parse(JSON.stringify(req.body));
    req.checkBody("MobileNo", "MobileNo is required").notEmpty();
    req.checkBody("OTP", "OTP is required").notEmpty();
    var errors = req.validationErrors();

    if (errors) {
      return res.send(
        JSON.stringify({
          status: failStatus,
          message: errors[0].msg,
        })
      );
    } else {
      if (req.method == "POST") {
        var select_query =
          "SELECT * FROM `ecom_customers` WHERE MobileNo = '" +
          input.MobileNo +
          "' and OTP=" +
          input.OTP +
          " and Active = 1";
        OrderModel.select_query(select_query).then((returns) => {
          console.log("returns : " + returns.length);
          if (returns.length > 0) {
            res.json({
              status: true,
              message: "data find successfully",
              data: returns[0],
            });
          } else {
            res.json({
              status: false,
              message: "data not found",
              data: {},
            });
            //return res.send(data);
          }
        });
      }
    }
  } catch (err) {
    return res.send(
      JSON.stringify({
        status: failStatus,
        message: err,
      })
    );
  }
  return false;
}
exports.login = login;

async function google_login(req, res) {
  try {
    var input = JSON.parse(JSON.stringify(req.body));
    console.log("returns : " + input.Email);
    req.checkBody("Name", "Name is required").notEmpty();
    req.checkBody("Email", "Email is required").notEmpty();
    var errors = req.validationErrors();
    if (errors) {
      return res.send(
        JSON.stringify({
          status: failStatus,
          message: errors[0].msg,
        })
      );
    } else {
      if (req.method == "POST") {
        var select_query =
          "SELECT * FROM `ecom_customer_s` WHERE Email = '" + input.Email + "'";
        //console.log(select_query);
        OrderModel.select_query(select_query).then((returns, error) => {
          if (returns.length > 0) {
            var update_query =
              "UPDATE `ecom_customer_s` Set Name='" +
              input.Name +
              "' WHERE Email = '" +
              input.Email +
              "'";
            OrderModel.update_query(update_query).then((_returns, error) => {
              //console.log('returns : ' + returns);
              if (_returns.length > 0) {
                res.json({
                  status: true,
                  message: "data find successfully",
                  data: returns[0],
                });
              } else {
                res.json({
                  status: false,
                  message: "data not found",
                  data: {},
                });
              }
            });
          } else {
            var number = Math.floor(1000000000 + Math.random() * 9000000000);
            var to_number = "11_" + number;
            var sql =
              "insert into ecom_customer_s(TONumber,Name,Email,CID, IsDelete, Active) values( '" +
              to_number +
              "','" +
              input.Name +
              "', '" +
              input.Email +
              "','" +
              number +
              "',0,1)";

            OrderModel.insert(sql).then((returns, error) => {
              if (returns.length > 0) {
                var select_customer =
                  "SELECT * FROM `ecom_customer_s` WHERE Email = '" +
                  input.Email +
                  "'";
                OrderModel.select_query(select_customer).then(
                  (c_returns, error) => {
                    console.log("customer : " + c_returns.length);
                    if (c_returns.length > 0) {
                      res.json({
                        status: true,
                        message: "data find successfully",
                        data: c_returns[0],
                      });
                    } else {
                      res.json({
                        status: false,
                        message: "data not found",
                        data: {},
                      });
                    }
                  }
                );
              }
            });
          }
        });
      }
    }
  } catch (err) {
    return res.send(
      JSON.stringify({
        status: failStatus,
        message: err,
      })
    );
  }
  return false;
}
exports.google_login = google_login;
