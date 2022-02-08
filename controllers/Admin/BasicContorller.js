var SettingModel = require("../../models/admin/SettingsModel.js");

async function BasicList(req, res) {
  var data = {};
  var promise = SettingModel.select(
    " select gid,max(gtext) gtext from ecom_settings group by gid ;select * from ecom_settings; "
  );
  promise
    .then(function (data) {
      //  var t= data.filter(s=>s.gid==2);
      //  console.log(data);

      res.set("content-type", "text/html; charset=mycharset");
      res.render("Admin/Basic/BasicList.ejs", {
        title: "24Bigbazar.com | Login",
        content: "Basic Information",
        data: data.recordsets,
        action: "Basiclist",
        controller: "Basic",
      });
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).send({ error: err });
      //res.render('Admin/Basic/BasicList.ejs', {title: '24Bigbazar.com | Basic', content: 'Basic Information', data: data});
    });
}
exports.BasicList = BasicList;

async function BasicEntry(req, res) {
  const { check, validationResult } = require("express-validator/check");
  var input = JSON.parse(JSON.stringify(req.body));

  errorData = {};
  data = {};
  if (req.method == "POST") {
    // console.log(req.body);
    req.checkBody("gid", "Group is required").notEmpty();
    req.checkBody("gtext", "Title is required").notEmpty();
    req.checkBody("text", "Title is required").notEmpty();
    var errors = req.validationErrors();
    if (errors) {
      if (errors.length > 0) {
        errors.forEach(function (errors1) {
          var field1 = String(errors1.param);
          var msg = errors1.msg;
          errorData[field1] = msg;
        });
      }
      console.log(errors);
      var promise = SettingModel.select_group();
      promise.then(function (data) {
        res.set("content-type", "text/html; charset=mycharset");
        res.render("Admin/Basic/BasicEntry.ejs", {
          title: "24Bigbazar.com | Basic Entry",
          content: "Basic Information",
          data: data.recordset,
          action: "BasicEntry",
          controller: "Basic",
        });
      });
    } else {
      let images = req.files.images;
      var timestamp = new Date().getTime("yy_MM_dd_ss") + ".png";
      // console.log(timestamp);
      filename = images.name;
      images.mv("assets/upload/" + timestamp, function (err) {
        if (err) {
          console.log(err);
          req.flash("error", "Could not upload image. Please try again!");
          res.locals.message = req.flash();
        }
      });
      var sqlquery =
        "insert into ecom_settings(gid, gtext,text) values('" +
        input.gid +
        "', '" +
        input.gtext +
        "','" +
        input.text +
        "')";
      // console.log(sqlquery);
      SettingModel.insert(sqlquery);

      res.redirect("/Admin/Basic/BasicList");
    }
  } else {
    var promise = SettingModel.select_group();
    promise
      .then(function (data) {
        res.set("content-type", "text/html; charset=mycharset");
        res.render("Admin/Basic/BasicEntry.ejs", {
          title: "24Bigbazar.com | Basic Entry",
          content: "Basic Information",
          data: data.recordset,
          action: "BasicEntry",
          controller: "Basic",
        });
      })
      .catch(function (err) {
        res.status(500).send({ error: err });
      });
  }
}
exports.BasicEntry = BasicEntry;

async function BasicEdit(req, res) {
  const { check, validationResult } = require("express-validator/check");
  var input = JSON.parse(JSON.stringify(req.body));

  errorData = {};
  data = {};
  if (req.method == "POST") {
    // console.log(req.body);
    req.checkBody("gid", "Group is required").notEmpty();
    req.checkBody("gtext", "Title is required").notEmpty();
    req.checkBody("text", "Title is required").notEmpty();
    var errors = req.validationErrors();
    if (errors) {
      if (errors.length > 0) {
        errors.forEach(function (errors1) {
          var field1 = String(errors1.param);
          var msg = errors1.msg;
          errorData[field1] = msg;
        });
      }
      // console.log(errors);
      var promise = SettingModel.select(
        "select gid,max(gtext) gtext from ecom_settings group by gid ;select * from ecom_settings where id =" +
          req.params.id
      );

      promise.then(function (data) {
        res.set("content-type", "text/html; charset=mycharset");
        res.render("Admin/Basic/BasicEdit.ejs", {
          title: "24Bigbazar.com | Basic Entry",
          content: "Basic Information",
          data: data.recordsets,
          action: "BasicEdit",
          controller: "Basic",
        });
      });
    } else {
      let images = req.files.images;
      var timestamp = new Date().getTime("yy_MM_dd_ss") + ".png";
      // console.log(timestamp);
      filename = images.name;
      images.mv("assets/upload/" + timestamp, function (err) {
        if (err) {
          console.log(err);
          req.flash("error", "Could not upload image. Please try again!");
          res.locals.message = req.flash();
        }
      });

      var sqlquery =
        "update ecom_settings set gid='" +
        input.gid +
        "', gtext='" +
        input.gtext +
        "',text='" +
        input.text +
        "',imgpath='" +
        timestamp +
        "' where id=" +
        req.params.id;
      //console.log(sqlquery);
      SettingModel.insert(sqlquery);

      res.redirect("/Admin/Basic/BasicList");
    }
  } else {
    var promise = SettingModel.select(
      "select gid,max(gtext) gtext from ecom_settings group by gid ;select * from ecom_settings where id =" +
        req.params.id
    );

    promise
      .then(function (data) {
        res.set("content-type", "text/html; charset=mycharset");
        res.render("Admin/Basic/BasicEdit.ejs", {
          title: "24Bigbazar.com | Basic Entry",
          content: "Basic Information",
          data: data.recordsets,
          action: "BasicEdit",
          controller: "Basic",
        });
      })
      .catch(function (err) {
        res.status(500).send({ error: err });
      });
  }
}
exports.BasicEdit = BasicEdit;
