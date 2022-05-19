const express=require("express");
const controller=require("./../Controllers/StudentController")
const router=express.Router();
 isAuth=require("./../Middleware/authMW");
router.route("/students")
.get(isAuth,controller.getAllStudent)
.post(/*isAuth,*/controller.createStudent)
//.put(/*isAuth,*/controller.updateStudent)
//.delete(/*isAuth,*/controller.deleteStudent)
router.put("/students/:id",controller.updateStudent)
router.delete("/students/:id",controller.deleteStudent)

router.get("/students/:id",controller.getStudent)
 module.exports=router;