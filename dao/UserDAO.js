let UserModel = require('../model/UserModel');

class UserDAO{
    constructor(){
    }

    async findOneBasedOneEmail(email){
        return UserModel.find({email:email}).exec().then(result=>{

            return {a:"a"};
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