
class UserResponse{

    constructor() {
       
      }

      UserOkResponse  (id,name, email, status){
        return {id :id, name:name, email:email, status:status,code:200};
      }
      ErrorResponse(email){
        return {email:email,message:'is invalid',status:false,code:400}
      }
}



module.exports = UserResponse;




