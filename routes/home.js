const express = require("express");
const jwt = require("jsonwebtoken");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

const home = require("../models/model/Home.js");
const banner = require("../models/model/Banner.js");
const brand = require("../models/model/Brand.js");
const popular = require("../models/model/Popular.js");
const feature = require("../models/model/Feature.js");
const product = require("../models/model/Product.js");
const flash = require("../models/model/Flash.js");
const flash_details = require("../models/model/FlashDetails.js");

const router = express.Router();
router.get("/gethomes", (req, res, next) => {
  try {
    // var token = req.headers['x-access-token'];
    // if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    // jwt.verify(token, 'secretkey', (err, authData) => {
    //     if (err) {
    //         res.sendStatus(403);
    //     } else {

    var home_obj = {};
    banner
      .findAll({ where: { IsHomePage: 1, IsActive: 1 } })
      .then((banners) => {
        //[Op.gt]: 6 { where: { parentid: 0 } } // { limit: 5 } // { where: { parentid: 0 } } // { where: { parentid: 0 } }
        home_obj.banners = banners;

        product
          // .findAll({ where: { Rol: 1, ParentId: 0, IsHome: 1 } })
          .findAll({ where: { ParentId: 0, Active: 1, RankId: 0 } })
          .then((categories) => {
            home_obj.categories = categories;

            flash.findAll({ where: { Active: 1 } }).then((_flash) => {
              if (_flash[0].Id > 0) {
                flash_details
                  .findAll({ where: { FlashId: _flash[0].Id } })
                  .then((flash_details) => {
                    var flash_item = _flash[0];
                    var flash_data = {
                      Id: flash_item.Id,
                      OfferId: flash_item.OfferId,
                      Name: flash_item.Name,
                      Name_BN: flash_item.Name_BN,
                      OfferExpiry: flash_item.OfferExpiry,
                      IsCombo: flash_item.IsCombo,
                      TrackedId: flash_item.TrackedId,
                      CreateBy: flash_item.CreateBy,
                      CreateDate: flash_item.CreateDate,
                      IsDelete: flash_item.IsDelete,
                      Active: flash_item.Active,
                      Details: flash_details,
                    };
                    home_obj.flash = flash_data;
                    //home_obj.flash_details = flash_details;
                  })
                  .catch((err) => {
                    res.send("Error :" + err);
                  });
              } else {
                home_obj.flash = [];
              }
              product
                .findAll({
                  where: { Active: 1, IsNew: 1, ParentId: { [Op.gt]: 0 } },
                })
                .then((products) => {
                  home_obj.newproduct = products;
                  home_obj.products = products;

                  popular
                    .findAll({
                      where: {
                        Active: 1,
                        IsPopular: 1,
                        ParentId: { [Op.gt]: 0 },
                      },
                    })
                    .then((popular) => {
                      home_obj.popular = popular;

                      feature
                        .findAll()
                        .then((features) => {
                          home_obj.features = features;

                          brand
                            .findAll()
                            .then((brands) => {
                              home_obj.brands = brands;

                              res.json({
                                status: true,
                                message: "Data loaded successfully",
                                homeobj: home_obj,
                              });
                            })
                            .catch((err) => {
                              res.send("Error :" + err);
                            });

                          // res.json({
                          //     status: true,
                          //     message: 'Data loaded successfully',
                          //     homeobj: home_obj
                          // });
                        })
                        .catch((err) => {
                          res.send("Error :" + err);
                        });
                    })
                    .catch((err) => {
                      res.send("Error :" + err);
                    });
                })
                .catch((err) => {
                  res.send("Error :" + err);
                });
            });
          })
          .catch((err) => {
            res.send("Error :" + err);
          });
      })
      .catch((err) => {
        res.send("Error :" + err);
      });

    //////////////////////////////////////////////////
    // var home_obj = {};
    // product.findAll({ where: { Active: 1, Rol: 0 }}).then(categories => { //[Op.gt]: 6 { where: { parentid: 0 } } // { limit: 5 } // { where: { parentid: 0 } } // { where: { parentid: 0 } }
    //     home_obj.categories = categories;

    // }).catch(err => {
    //     res.send('Error :' + err)
    // });

    // banner.findAll({ where: { IsHomePage: is_home, IsActive : 1 }}).then(banners => {
    //     home_obj.banners = banners;
    // }).catch(err => {
    //     res.send('Error :' + err)
    // });

    // brand.findAll().then(brands => {
    //     home_obj.brands = brands;
    // }).catch(err => {
    //     res.send('Error :' + err)
    // });

    // product.findAll({ where: { Active: 1, Rol: 1}}).then(products => {
    //         home_obj.products = products;
    //     }).catch(err => {
    //         res.send('Error :' + err)
    //     });

    // popular.findAll().then(popular_data => {
    //     home_obj.populars = popular_data;
    // }).catch(err => {
    //     res.send('Error :' + err)
    // });

    // flash.findAll().then(flash_data => {
    //     home_obj.flash = flash_data;
    // }).catch(err => {
    //     res.send('Error :' + err)
    // });

    // feature.findAll().then(features => {
    //     home_obj.features = features;
    //     res.json({
    //         status: true,
    //         message: 'Data loaded successfully',
    //         homeobj: home_obj
    //     });
    // }).catch(err => {
    //     res.send('Error :' + err)
    // });

    //        }
    //     });
  } catch (err) {
    return res.json({
      status: failStatus,
      message: err,
    });
  }
  return false;
});
module.exports = router;
