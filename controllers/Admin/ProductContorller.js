var ProductModel = require("../../models/admin/ProductsModel.js");
var ImageModel = require("../../models/admin/ImageModel.js");
const baseUrl = "http://localhost:8000/upload/product_images/";

async function CategoryEntry(req, res) {
  var input = JSON.parse(JSON.stringify(req.body));
  errorData = {};
  data = {};
  if (req.method == "POST") {
    req.checkBody("Category", "Category is required").notEmpty();
    req.checkBody("Category_BN", "Category_BN is required").notEmpty();
    req.checkBody("Description", "Description is required").notEmpty();
    var errors = req.validationErrors();
    if (errors) {
      if (errors.length > 0) {
        errors.forEach(function (errors1) {
          var field1 = String(errors1.param);
          var msg = errors1.msg;
          errorData[field1] = msg;
        });
      }
      res.set("content-type", "text/html; charset=mycharset");
      res.render("Admin/Product/CategoryEntry.ejs", {
        title: "American Tmart | Category Entry",
        errors: errors,
        content: "Category Information",
        data: data,
        action: "CategoryEntry",
        controller: "product",
      });
    } else {
      var ParentId = input.ParentId ? input.ParentId : 0; 
      var sql_query =
        "insert into ecom_products(PName, PName_BN, Category, Category_BN, Description, Description_BN, ParentId, Active, RankId, ROL, IsDelete) values('" +
        input.Category +
        "', N'" +
        input.Category_BN +
        "','" +
        input.Category +
        "', N'" +
        input.Category_BN +
        "','" +
        input.Description +
        "',N'" +
        input.Description_BN +
        "','" +
        ParentId+
        "','" +
        input.Status +
        "','" +
        input.RankId +
        "',1,0)";
        console.log(sql_query);
        console.log(input);
      ProductModel.insert(sql_query);
      res.redirect("/Admin/product/CategoryList");
    }
  } else {
    ProductModel.select_query(
      "select Id, PName from ecom_products where Rol = 1 and ParentId = 0 and Active = 1"
    )
      .then((data) => {
        res.set("content-type", "text/html; charset=mycharset");
        res.render("Admin/Product/CategoryEntry.ejs", {
          title: "http://www.americantmartbd.com | Category Entry",
          content: "Category Information",
          data: data, //data.recordset,
          action: "CategoryEntry",
          controller: "product",
        });
      })
      .catch(function (err) {
        res.status(500).send({
          error: err,
        });
      });
  }
}
exports.CategoryEntry = CategoryEntry;

async function CategoryEdit(req, res) {
  var input = JSON.parse(JSON.stringify(req.body));
  errorData = {};
  data = {};
  if (req.method == "POST") {
    req.checkBody("Category", "Category is required").notEmpty();
    req.checkBody("Category_BN", "Category_BN is required").notEmpty();
    req.checkBody("Description", "Description is required").notEmpty();
    var errors = req.validationErrors();
    if (errors) {
      if (errors.length > 0) {
        errors.forEach((err) => {
          var fd = String(err.param);
          var msg = err.msg;
          errorData[fd] = msg;
        });
      }
      res.set("content-type", "text/html; charset=mycharset");
      res.render("admin/product/categoryEdit.ejs", {
        title: "http://www.americantmartbd.com | Category Entry",
        errors: errors,
        content: "Category Entry",
        data: data,
        action: "CategoryEdit",
        controller: "product",
      });
    } else {
      var sql_query =
        "update ecom_products set PName='" +
        input.Category +
        "', PName_BN=N'" +
        input.Category_BN +
        "',Category='" +
        input.Category +
        "',Category_BN=N'" +
        input.Category_BN +
        "',Description='" +
        input.Description +
        "',Description_BN=N'" +
        input.Description_BN +
        "', ParentId='" +
        input.ParentId +
        "', Active='" +
        input.Status +
        "', RankId='" +
        input.RankId +
        "' where Id=" +
        req.params.id;
      console.log(sql_query);
      ProductModel.insert(sql_query);
      res.redirect("/admin/product/categoryList");
    }
  } else {
    ProductModel.select_query(
      "select * from ecom_products where rol = 1 and Active = 1 ORDER BY RankId"
    )
      .then((data) => {
        ProductModel.select_query(
          "select * from ecom_products where Id = " +
            req.params.id +
            " ORDER BY RankId"
        ).then((_data) => {
          res.set("content-type", "text/html; charset=mycharset");
          res.render("Admin/Product/CategoryEdit.ejs", {
            title: "http://www.http://www.americantmartbd.com | Category Edit",
            content: "Category Edit",
            data: data,
            adata: _data,
            action: "CategoryEdit",
            controller: "product",
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
exports.CategoryEdit = CategoryEdit;

async function CategoryList(req, res) {
  //SELECT * FROM `ecom_products` WHERE ParentId = 0 and Rol = 1
  var sql_query = "select * from ecom_products where rol = 1 and active = 1";
  ProductModel.select_query(sql_query)
    .then((data) => {
      res.set("content-type", "text/html; charset=mycharset");
      res.render("Admin/Product/CategoryList.ejs", {
        title: "http://www.americantmartbd.com | Login",
        content: "Category Information",
        data: data,
        action: "CategoryList",
        controller: "Product",
      });
    })
    .catch((err) => {
      res.status(500).send({
        error: err,
      });
    });
}
exports.CategoryList = CategoryList;

async function ProductList(req, res) {
  var sql_query =
    "select * from ecom_products where Active = 1 order by rankId desc";
  ProductModel.select_query(sql_query)
    .then((data) => {
      res.set("content-type", "text/html; charset=mycharset");
      res.render("Admin/Product/ProductList.ejs", {
        title: "http://www.americantmartbd.com | Product List",
        content: "Product Information",
        data: data,
        action: "ProductList",
        controller: "Product",
      });
    })
    .catch(function (err) {
      res.status(500).send({
        error: err,
      });
    });
}
exports.ProductList = ProductList;

async function ProductEntry(req, res) {
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
        "select Id, PName from ecom_Products where Rol = 1 and Active = 1"
      ).then((data) => {
        ProductModel.select_query(
          "select * from ecom_suppliers Where Active = 1"
        ).then((sdata) => {
          res.set("content-type", "text/html; charset=mycharset");
          res.render("Admin/Product/ProductEntry.ejs", {
            title: "http://www.americantmartbd.com | Basic Entry",
            content: "Product Information",
            action: "ProductEntry",
            controller: "Product",
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
        "insert into ecom_products(PName,PName_BN,Brand,Brand_BN,Description,Description_BN, ParentId,IsDelete, Active,RankId,ROL, MRP, UnitPrice, Discount,UnitsInStock,SID, IsHome, IsNew, IsPopular, Category) values('" +
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
        "','" +
        "')";
      console.log(sql_query);
      ProductModel.insert(sql_query);

      //size
      // input.size.forEach((size) => {
      //   var size_query = "insert into ecom_sizes(PName)"
      // })

      res.redirect("/Admin/product/productList");
    }
  } else {
    var sql_query =
      "select Id, PName from ecom_products where Rol = 1 and Active = 1";
    ProductModel.select_query(sql_query)
      .then((data) => {
        ProductModel.select_query(
          "select * from ecom_suppliers Where Active = 1"
        ).then((_data) => {
          res.set("content-type", "text/html; charset=mycharset");
          res.render("Admin/Product/ProductEntry.ejs", {
            title: "http://www.americantmartbd.com | Product Entry",
            content: "Product Information",
            action: "ProductEntry",
            controller: "product",
            data: data,
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
exports.ProductEntry = ProductEntry;

async function ProductEdit(req, res) {
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
      var promise = ProductModel.select_query(
        "select Id, PName from ecom_Products where rol = 0 and Active = 1"
      ).then((data) => {
        var promisesup = ProductModel.select_query(
          "select * from ecom_Suppliers Where Active = 1"
        ).then((sdata) => {
          var predit = ProductModel.select_query(
            "select * from ecom_Products where Id = " + req.params.id
          ).then((_data) => {
            res.set("content-type", "text/html; charset=mycharset");
            res.render("Admin/Product/ProductEdit.ejs", {
              title: "http://www.americantmartbd.com | Product Edit",
              content: "Product Information",
              data: data,
              action: "ProductEdit",
              controller: "product",
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
        "update ecom_products set PName='" +
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
      console.log("update ecom_products: " + sql_query);
      ProductModel.insert(sql_query);

      //size
      var sizeArray = [
        "-",
        "N/A",
        "M",
        "XL",
        "XXL",
        "S",
        "age 1-2 years",
        "age 3-5 years",
        "age 6-8 years",
        "age 9-12 years",
      ];
      input.size.forEach((size) => {
        var size_query = `insert into ecom_sizes(PID, SizeId, Size) values( '${req.params.id}', '${size}', '${sizeArray[size]}' )`;
        db.sequelize.query(size_query, function (err, result) {
          if (err) throw err;
        });
      });
      res.redirect("/Admin/product/ProductList");
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
    ProductModel.select_query(
      "select Id, PName from ecom_Products where Rol = 1 and Active = 1"
    )
      .then((data) => {
        ProductModel.select_query(
          "select * from ecom_Suppliers WHERE Active = 1"
        ).then((sdata) => {
          ProductModel.select_query(
            "select * from ecom_Products where Id = " + req.params.id
          ).then((_data) => {
            res.set("content-type", "text/html; charset=mycharset");
            res.render("Admin/Product/ProductEdit.ejs", {
              title: "http://www.americantmartbd.com | Product Edit",
              content: "Product Edit",
              data: data,
              action: "ProductEdit",
              controller: "product",
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
exports.ProductEdit = ProductEdit;

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
