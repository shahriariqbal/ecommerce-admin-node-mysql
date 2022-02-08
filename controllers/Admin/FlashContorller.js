var ProductModel = require("../../models/admin/ProductsModel.js");

const baseUrl = "http://10.11.0.5:8000/upload/product_images/";

async function FlashList(req, res) {
  var sql_query = "select * from ecom_flashes where Active = 1";
  ProductModel.select_query(sql_query)
    .then((data) => {
      var sql = "select * from ecom_products where Active = 1 and ParentId > 0";
      ProductModel.select_query(sql).then((products) => {
        res.set("content-type", "text/html; charset=mycharset");
        res.render("Admin/Flash/FlashList.ejs", {
          title: "http://www.americantmartbd.com | Flash List",
          content: "Flash",
          data: data,
          products: products,
          action: "FlashList",
          controller: "flash",
        });
      });
    })
    .catch(function (err) {
      res.status(500).send({
        error: err,
      });
    });
}
exports.FlashList = FlashList;

async function FlashEntry(req, res) {
  var input = JSON.parse(JSON.stringify(req.body));
  errorData = {};
  data = {};
  if (req.method == "POST") {
    req.checkBody("PName", "Name is required").notEmpty();
    req.checkBody("UnitPrice", "Price is required").notEmpty();
    req.checkBody("SID", "Supplier is required").notEmpty();
    req.checkBody("ParentId", "This is required").notEmpty();
    req.checkBody("Location", "Location is required").notEmpty();

    var errors = req.validationErrors();
    if (errors) {
      if (errors.length > 0) {
        errors.forEach(function (errors1) {
          var field1 = String(errors1.param);
          var msg = errors1.msg;
          errorData[field1] = msg;
        });
      }
      ProductModel.select_query(
        "select Id, PName from ecom_flashes where Rol = 1 and Active = 1"
      ).then((data) => {
        ProductModel.select_query(
          "select * from ecom_suppliers Where Active = 1"
        ).then((sdata) => {
          res.set("content-type", "text/html; charset=mycharset");
          res.render("Admin/Flash/FlashEntry.ejs", {
            title: "http://www.americantmartbd.com | Basic Entry",
            content: "Flash Information",
            action: "FlashEntry",
            controller: "Flash",
            data: data,
            sdata: sdata,
          });
        });
      });
    } else {
      var IsHome = 0,
        IsNew = 0,
        IsPopular = 0;
      var location = input.Location;
      if (location == 1) {
        IsNew = 1;
      } else {
        IsPopular = 1;
      }

      var sql_query =
        "insert into ecom_flashes(PName,PName_BN,Brand,Brand_BN,Description,Description_BN, ParentId,IsDelete, Active,RankId,ROL, MRP, UnitPrice, Discount,UnitsInStock,SID, IsHome, IsNew, IsPopular) values('" +
        input.PName +
        "', N'" +
        input.PName_BN +
        "','" +
        input.Brand +
        "', N'" +
        input.Brand_BN +
        "','" +
        input.Description +
        "',N'" +
        input.Description_BN +
        "','" +
        input.ParentId +
        "',0,'" +
        input.Status +
        "','" +
        input.RankId +
        "',1,'" +
        input.MRP +
        "','" +
        input.UnitPrice +
        "','" +
        input.Discount +
        "'," +
        input.UnitsInStock +
        ",'" +
        input.SID +
        "','" +
        IsHome +
        "','" +
        IsNew +
        "','" +
        IsPopular +
        "')";
      console.log(sql_query);
      FlashModel.insert(sql_query);
      res.redirect("/Admin/Flash/FlashList");
    }
  } else {
    var sql_query =
      "select * from ecom_products where Active = 1 and ParentId > 0";
    ProductModel.select_query(sql_query)
      .then((products) => {
        ProductModel.select_query(
          "select * from ecom_suppliers Where Active = 1"
        ).then((_data) => {
          res.set("content-type", "text/html; charset=mycharset");
          res.render("Admin/Flash/FlashEntry.ejs", {
            title: "http://www.americantmartbd.com | Flash Entry",
            content: "Flash Information",
            action: "FlashEntry",
            controller: "Flash",
            products: products,
            sdata: _data,
          });
        });
      })
      .catch((err) => {
        res.status(500).send({
          error: err,
        });
      });
  }
}
exports.FlashEntry = FlashEntry;

async function FlashEdit(req, res) {
  var input = JSON.parse(JSON.stringify(req.body));
  errorData = {};
  data = {};
  if (req.method == "POST") {
    req.checkBody("PName", "Name is required").notEmpty();
    req.checkBody("UnitPrice", "Price is required").notEmpty();
    req.checkBody("SID", "Supplier is required").notEmpty();
    req.checkBody("ParentId", "Category is required").notEmpty();
    req.checkBody("Location", "Location is required").notEmpty();
    var errors = req.validationErrors();
    if (errors) {
      if (errors.length > 0) {
        errors.forEach((err) => {
          var fd = String(err.param);
          var msg = err.msg;
          errorData[fd] = msg;
        });
      }
      var promise = FlashModel.select_query(
        "select Id, PName from ecom_Flashs where rol = 0 and Active = 1"
      ).then((data) => {
        var promisesup = FlashModel.select_query(
          "select * from ecom_Suppliers Where Active = 1"
        ).then((sdata) => {
          var predit = FlashModel.select_query(
            "select * from ecom_Flashs where Id = " + req.params.id
          ).then((_data) => {
            res.set("content-type", "text/html; charset=mycharset");
            res.render("Admin/Flash/FlashEdit.ejs", {
              title: "http://www.americantmartbd.com | Flash Edit",
              content: "Flash Information",
              data: data,
              action: "FlashEdit",
              controller: "Flash",
              data: data,
              sdata: sdata,
              edata: _data,
            });
          });
        });
      });
    } else {
      var IsHome = 0,
        IsNew = 0,
        IsPopular = 0;
      var location = input.Location;
      console.log("Loc" + location);
      if (location == 1) {
        IsNew = 1;
      } else {
        IsPopular = 1;
      }
      var sql_query =
        "update ecom_Flashs set PName='" +
        input.PName +
        "', PName_BN=N'" +
        input.PName_BN +
        "', Brand='" +
        input.Brand +
        "',Brand_BN=N'" +
        input.Brand_BN +
        "',Description='" +
        input.Description +
        "', Description_BN=N'" +
        input.Description_BN +
        "', ParentId='" +
        input.ParentId +
        "',Active='" +
        input.Status +
        "', RankId='" +
        input.RankId +
        "', ROL=1, MRP='" +
        input.MRP +
        "',UnitPrice='" +
        input.UnitPrice +
        "', Discount='" +
        input.Discount +
        "',UnitsInStock=" +
        input.UnitsInStock +
        ", SID='" +
        input.SID +
        "', IsHome='" +
        IsHome +
        "', IsNew='" +
        IsNew +
        "', IsPopular='" +
        IsPopular +
        "' where Id=" +
        req.params.id;
      console.log("update ecom_Flashs: " + sql_query);
      FlashModel.insert(sql_query);
      res.redirect("/Admin/Flash/FlashList");
    }
  } else {
    var l_data = [
      {
        Value: 1,
        Text: "IsNew",
      },
      {
        Value: 2,
        Text: "IsPopular",
      },
    ];
    FlashModel.select_query(
      "select Id, PName from ecom_Flashs where Rol = 1 and Active = 1"
    )
      .then((data) => {
        FlashModel.select_query(
          "select * from ecom_Suppliers WHERE Active = 1"
        ).then((sdata) => {
          FlashModel.select_query(
            "select * from ecom_Flashs where Id = " + req.params.id
          ).then((_data) => {
            res.set("content-type", "text/html; charset=mycharset");
            res.render("Admin/Flash/FlashEdit.ejs", {
              title: "http://www.americantmartbd.com | Flash Edit",
              content: "Flash Edit",
              data: data,
              action: "FlashEdit",
              controller: "Flash",
              data: data,
              sdata: sdata,
              edata: _data,
              location_data: l_data,
            });
          });
        });
      })
      .catch((err) => {
        res.status(500).send({
          error: err,
        });
      });
  }
}
exports.FlashEdit = FlashEdit;

async function images(req, res) {
  res.set("content-type", "text/html; charset=mycharset");
  data = {};
  action = "list";
  var id = String("'" + req.params.id + "'");
  backURL = req.header("Referer") || "/";
  var imageArra = [];
  if (req.method == "POST") {
    if (req.files && req.files.images !== undefined) {
      let images = req.files.images;
      if (images && images.length > 0) {
        images.forEach((item, key) => {
          filename = item.name;
          image_path = +filename;
          item.mv(image_path, (err) => {
            if (err) {
              req.flash("error", "could not upload image. Please try again!");
              res.locals.message = req.flash();
              return res.redirect("/admin/product/images");
            } else {
              default_image = 0;
              if (key === 0) {
                default_image = 1;
              }
              var imagedata = {
                pid: req.params.id,
                image: filename,
                image_path: baseUrl + filename,
                default_image: default_image,
              };
              imageArra.push(imagedata);
              ImageModel.saveDataCallback(imagedata, (result) => {
                if (result) {
                }
              });
            }
          });
        });

        req.flash("success", "Images uploaded successfully.");
        res.locals.message = req.flash();
        return res.redirect(backURL);
      } else {
        filename = images.name;
        image_path = "assets/upload/product_images/" + filename;
        images.mv(image_path, function (err) {
          if (err) {
            req.flash("error", "Could not upload image. Please try again!");
            res.locals.message = req.flash();
            return res.redirect(backURL);
          } else {
            var imagedata = {
              pid: req.params.id,
              image: filename,
              image_path: baseUrl + filename,
              default_image: 1,
            };
            imageArra.push(imagedata);
            ImageModel.saveDataCallback(imagedata, (result) => {
              req.flash("success", "Images uploaded successfully.");
              res.locals.message = req.flash();
            });
          }
        });
        req.flash("success", "Images uploaded successfully.");
        res.locals.message = req.flash();
        return res.redirect(backURL);
      }
    }
  }
  const allRecord = await ImageModel.getByProductId(id);
  res.render("Admin/Product/images.ejs", {
    title: " Images",
    data: allRecord,
    content: "Image Upload",
    action: "ProductList",
    controller: "product",
    id: req.params.id,
  });
}
exports.images = images;

async function deleteImage(req, res) {
  backURL = req.header("Referer") || "/";
  if (req.params.id) {
    var id = String("'" + req.params.id + "'");
    entityDetail = await ImageModel.deleteRecord(id);
    if (entityDetail.length == 0) {
      req.flash("error", "Invalid url");
    } else {
      req.flash("success", "Record deleted successfully.");
    }
  } else {
    req.flash("error", "Invalid url.");
  }
  return res.redirect(backURL);
}
exports.deleteImage = deleteImage;

/**
 *  setDefaultImage
 *  Purpose: This function is used to set setDefaultImage
 *  Pre-condition:  None
 *  Post-condition: None.
 *  Parameters: ,
 *  Returns: json
 */
async function setDefaultImage(req, res) {
  var categoryDetail = {};
  backURL = req.header("Referer") || "/";
  if (req.params.id) {
    var id = String("'" + req.params.id + "'");
    var pid = String("'" + req.params.pid + "'");

    //entityDetail = await ImageModel.resetDefaultImage(product_id);
    entityDetail = await ImageModel.setDefaultImage(id, pid);
    if (entityDetail.length == 0) {
      req.flash("error", "Invalid url");
    } else {
      req.flash("success", "Record updated successfully.");
    }
  } else {
    req.flash("error", "Invalid url.");
  }
  return res.redirect(backURL);
}
exports.setDefaultImage = setDefaultImage;
