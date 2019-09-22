let UserService = require('../service/UserService');
let initUserService = new UserService();
let UserModel = require('../model/UserModel');

exports.saveUser = (req,res)=>{


    let result = initUserService.saveUser(req.body);
    res.send(result.code,result);
}