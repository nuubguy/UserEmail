
class UserResponse{

    constructor() {
       
      }

      UserOkResponse  (userRequest){
        return {name:userRequest.name, email:userRequest.email, status:userRequest.status,code:200};
      }
      ErrorResponse(email){
        return {email:email,message:'is invalid',status:false,code:400}
      }
      badRequest(email){
                  return {email:email,message:'already exist',status:false,code:409}
              }

}



module.exports = UserResponse;




