var express = require('express');

let UserResponse = require('../dto/UserResponse');
let UserController = require('../controller/UserController');


let UserService = require('../service/UserService');
let initUserService = new UserService();
var router = express.Router();



router.post('/save',UserController.saveUser);





module.exports = router;
