var CustomerModel = require("../../models/admin/CustomerModel.js");

async function CustomerList(req, res) {
  CustomerModel.select_query("select * from ecom_customer_s")
    .then((data) => {
      res.set("content-type", "text/html; charset=mycharset");
      res.render("Admin/Customer/CustomerList.ejs", {
        title: "http://www.americantmartbd.com | Customer",
        content: "Customer",
        data: data,
        action: "CustomerList",
        controller: "Customer",
      });
    })
    .catch((err) => {
      res.status(500).send({
        error: err,
      });
    });
}
exports.CustomerList = CustomerList;

async function CustomerEntry(req, res) {
  var input = JSON.parse(JSON.stringify(req.body));
  errorData = {};
  data = {};
  if (req.method == "POST") {
    req.checkBody("Name", "Name is required").notEmpty();
    req.checkBody("Username", "User ID is required").notEmpty();
    req.checkBody("Email", "Email is required").notEmpty();
    // req.checkBody('Rol', 'Role is required').notEmpty();
    req.checkBody("Password", "Password is required").notEmpty();
    req.checkBody("CPassword", "Password is required").notEmpty();
    req.assert("CPassword", "Password do not match").equals(req.body.Password);
    var errors = req.validationErrors();
    if (errors) {
      if (errors.length > 0) {
        errors.forEach(function (errors1) {
          var field1 = String(errors1.param);
          var msg = errors1.msg;
          errorData[field1] = msg;
        });
      }
      CustomerModel.select_query("select * from ecom_roles").then((data) => {
        res.set("content-type", "text/html; charset=mycharset");
        res.render("Admin/Customer/CustomerEntry.ejs", {
          title: "http://www.americantmartbd.com | User Entry",
          content: "User",
          data: data,
          action: "UserEntry",
          controller: "User",
        });
      });
    } else {
      var sql_query =
        "insert into ecom_users(name, username,Phone, Email, password, roleid) values('" +
        input.Name +
        "', '" +
        input.Username +
        "','" +
        input.Phone +
        "','" +
        input.Email +
        "','" +
        input.Password +
        "'," +
        input.roleid +
        ")";
      console.log(sql_query);
      CustomerModel.insert(sql_query);
      res.redirect("/Admin/Customer/CustomerList");
    }
  } else {
    var promise = CustomerModel.select_query("select * from ecom_roles");
    promise
      .then(function (data) {
        res.set("content-type", "text/html; charset=mycharset");
        res.render("Admin/Customer/CustomerEntry.ejs", {
          title: "http://www.americantmartbd.com | User Entry",
          content: "User Information",
          data: data.recordset,
          action: "UserEntry",
          controller: "User",
        });
      })
      .catch(function (err) {
        res.status(500).send({
          error: err,
        });
      });
  }
}
exports.CustomerEntry = CustomerEntry;

async function CustomerEdit(req, res) {
  var input = JSON.parse(JSON.stringify(req.body));
  errorData = {};
  data = {};
  if (req.method == "POST") {
    req.checkBody("Name", "Name is required").notEmpty();
    req.checkBody("MobileNo", "Mobile No is required").notEmpty();
    req.checkBody("Area", "Area is required").notEmpty();
    req.checkBody("Address", "Email is required").notEmpty();
    req.checkBody("Email", "Password is required").notEmpty();

    var errors = req.validationErrors();
    if (errors) {
      if (errors.length > 0) {
        errors.forEach(function (errors1) {
          var field1 = String(errors1.param);
          var msg = errors1.msg;
          errorData[field1] = msg;
        });
      }
      var sql_query = "select * from ecom_customer_s where Id=" + req.params.id;
      CustomerModel.select_query(sql_query).then(function (data) {
        res.set("content-type", "text/html; charset=mycharset");
        res.render("Admin/Customer/CustomerEdit.ejs", {
          title: "http://www.americantmartbd.com | Customer Edit",
          content: "Customer Information",
          data: data,
          action: "SupplierEdit",
          controller: "Supplier",
        });
      });
    } else {
      var sql_query =
        "update ecom_customer_s set name='" +
        input.Name +
        "', MobileNo='" +
        input.MobileNo +
        "', Area='" +
        input.Area +
        "', Email='" +
        input.Email +
        "', Address='" +
        input.Address +
        "', Active='" +
        input.Status +
        "' where Id=" +
        req.params.id;
      console.log(sql_query);
      CustomerModel.insert(sql_query);
      res.redirect("/Admin/Customer/CustomerList");
    }
  } else {
    var sql_query = "select * from ecom_customer_s where Id=" + req.params.id;
    CustomerModel.select_query(sql_query)
      .then((data) => {
        res.set("content-type", "text/html; charset=mycharset");
        res.render("Admin/Customer/CustomerEdit.ejs", {
          title: "http://www.americantmartbd.com | Customer Edit",
          content: "Customer Update",
          data: data,
          action: "CustomerList",
          controller: "Customer",
        });
      })
      .catch(function (err) {
        res.status(500).send({
          error: err,
        });
      });
  }
}
exports.CustomerEdit = CustomerEdit;
