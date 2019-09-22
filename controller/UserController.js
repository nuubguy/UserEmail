let UserService = require('../service/UserService');

class UserController{
    constructor(){
        this.userService = new UserService();
    }

    saveUser(req,res,next){
        let result = this.userService.saveUser(req);

        return res.send(result.code,result);
    }
}