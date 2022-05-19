const Student=require("./../Models/StudentSchema");
const jwt=require("jsonwebtoken");
exports.login=(request,response,next)=>{
    Student.findOne({name:request.body.name})
              .then(data=>{
                if(!data) next(new Error ("username or password incorrect"));

                let token=jwt.sign({
                  email:request.body.email,
                  id:data._id,
                  role:"student"
                },"ITIMearnStackTeam",{expiresIn:"1h"})


                response.status(200).json({data,token})
              })
              .catch(error=>{
                  next(error);
              })
}
