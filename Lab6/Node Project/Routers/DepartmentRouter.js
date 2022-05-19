const express=require("express");
const {body,query,param}=require("express-validator")
const router=express.Router();

const controller=require("./../Controllers/departmentsController")
 router.get("",controller.getAlldepartments);
 router.get("/:id",controller.getDepartment);

 router.post("",[
     body("_id").isInt().withMessage("department ID should be Integer"),
     body("name").isAlpha().withMessage("Department Name should be String")
     .isLength({max:10}).withMessage("departemnt name length <10")
 ],controller.createDepartment);
 
 router.put("/:id",controller.updateDepartment);
 
 router.delete("/:id",controller.deleteDepartment);

 module.exports=router;