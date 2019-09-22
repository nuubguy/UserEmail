let UserDAO = require('../dao/UserDAO');
let UserResponse = require('../dto/UserResponse');

class UserService{

    constructor(){
        this.userResponse = new UserResponse();
        this.userDAO = new UserDAO();
    }

    saveUser(userRequest){
        if(this.userDAO.findOneBasedOneEmail(userRequest.email)!=null)
        return this.userResponse.ErrorResponse(userRequest.email);

        if(!/^\S+@\S+\.\S+$/.test(userRequest.email))
        return this.userResponse.ErrorResponse(userRequest.email);

        return this.userResponse.UserOkResponse(this.userDAO.saveUser(userRequest));
    }
}

module.exports = UserService;