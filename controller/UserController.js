let UserService = require('../service/UserService');
let initUserService = new UserService();
let UserModel = require('../model/UserModel');
let UserResponse = require('../dto/UserResponse');


exports.saveUser = (req,res)=>{
    let currentResponse = new UserResponse();
    let resultResponse = currentResponse.badRequest(req.body.email);
    UserModel.find({email:req.body.email}).exec().then(result =>{
        
        if(result.length!==0){
            res.send(resultResponse.code,resultResponse);
            return;
        }

        let firstResult = initUserService.saveUser(req.body);
        res.send(firstResult.code,firstResult);

        
    })
}