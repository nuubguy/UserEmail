let UserModel = require('../model/UserModel');

class UserDAO{
    constructor(){
    }

    findOneBasedOneEmail(email){
        return UserModel.find({email:email}).exec((err,currentUser)=>{
            
            if(err)return null;

            console.log(currentUser);
            
            return currentUser;
        });
    }

     saveUser(userRequest){
                let inputUser =new UserModel({name:userRequest.name,email:userRequest.email,status:true});
                 inputUser.save((err)=>{
                     if(err)
                     return handleError(err);
                 });
                return inputUser;
            }
}

module.exports = UserDAO;