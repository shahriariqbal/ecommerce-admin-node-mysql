const express = require("express");
const router = express.Router();

const bannerController = require("../controllers/API/BannerController.js");
//var ApiController = require('../controllers/API/ApiController.js');
//api
router.get("/home", bannerController.get_banner_list);
//router.post('/banner', banner._set_banner);
//router.delete('/banner', banner._delete_banner);

module.exports = router;
