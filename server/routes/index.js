// var Action = require("../models/action");
// var User = require("../models/user");
var express = require('express');
var router = express.Router();
var mainController = require("../controllers/main.controller");


router.get('/', mainController.getAllUsersWithActions);

router.post('/', mainController.addOrUpdateUserWithActions);

module.exports = router;
