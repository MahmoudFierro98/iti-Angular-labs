require("dotenv").config();
const express=require("express");
const body_parser=require("body-parser");
const mongoose=require("mongoose");
const multer=require("multer");
const  path=require("path");


const departmentRouter=require("./Routers/DepartmentRouter")
const studentRouter=require("./Routers/StudentRouter")
const authRouter=require("./Routers/authRouter")

//image variables
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log(path.join(__dirname,"images"));
        cb(null,path.join(__dirname,"images"))
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().toLocaleDateString().replace(/\//g,"-")+"-"+file.originalname)
    }
})
const fileFilter=(req,file,cb)=>{
    if(file.mimetype=="image/jpeg"||
       file.mimetype=="image/jpg"||
       file.mimetype=="image/png")
       cb(null,true)
    else
    cb(null,false)
}




//create server
const app=  express();
mongoose.connect("mongodb://localhost:27017/lab6")
        .then(()=>{
            console.log("DB connected ....");
            
            // listen on port Number
            app.listen(process.env.PORT||8080,()=>{
              
                console.log("I am Listenining .......")
            });

        })
        .catch(error=>{
                console.log(" DB Problem")
        })

//Middlewares
//first MW  method, url
app.use((request,response,next)=>{
            console.log(request.method, request.url);
            // response.send("  Heloo First MW");
            next();
});

app.use((request,response,next)=>{

    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Methods","GET,POST,DELETE,PUT,OPTIONS");
    response.header("Access-Control-Allow-Headers","Content-Type,Authorization")
    next();

})
app.use("/images",express.static(path.join(__dirname,"images")));
app.use(multer({storage,fileFilter}).single("image"))
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));
//---- Routers (End points)

app.use(authRouter);
app.use("/departments",departmentRouter)
app.use(studentRouter);

//----- Not found MW
app.use((request,response)=>{
    response.status(404).json({data:"Page Not Found"});
})

//----- Error MW
app.use((error,request,response,next)=>{   //JS  code function.length
    let status=error.status||500;
    response.status(status).json({Error:error+""});
})











