var express = require('express');

let UserResponse = require('../dto/UserResponse');
let UserController = require('../controller/UserController');
let initController = new UserController();
var router = express.Router();



router.post('/save', function(req, res, next) {
  let result = new UserResponse();
  
  // if(/^\S+@\S+\.\S+$/.test(req.body.email)==false)
  //   return res.send(400,result.ErrorResponse(req.body.email))

  // UserModel.create(new UserModel({name:req.body.name,email:req.body.email,status:req.body.status}), function (err, awesome_instance) {
  //   if (err) return res.send(500,err);
    
  //   return res.send(200,result.UserOkResponse(awesome_instance._id,awesome_instance.name,awesome_instance.email,true));
  // });
});





module.exports = router;
