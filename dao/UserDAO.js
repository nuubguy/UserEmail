let UserModel = require('../model/UserModel');

class UserDAO{
    constructor(){
    }

    findOneBasedOneEmail(email){
        return UserModel.findOne({email:email}).exec((err,currentUser)=>{
            if(err)return null;

            return currentUser;
        })
    }

    saveUser(userRequest){
        UserModel.create(new UserModel({name:userRequest.name,email:userRequest.email,status:true}), function (err, awesome_instance) {
            if (err) return err;
            
            return awesome_instance;
          });
    }
}

module.exports = UserDAO;