const mongoose=require("mongoose");
//fs
//1- build schema with validations
const schema=new mongoose.Schema({
    _id:Number,// mongoose.Types.ObjectID
    name:{type:String, required:true},
    department:{type:Number,ref:"departments"},
    image:String
});

//2- register for schema in mongoose
module.exports=mongoose.model("students",schema);

