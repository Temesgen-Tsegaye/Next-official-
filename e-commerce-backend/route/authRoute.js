const router = require("express").Router();
const authController=require("../domain/auth/controller")
const {checkError}=require("../util/errorHandler")
const {login}=require("../util/globalAuth")

router.post('/login',checkError(login))


module.exports=router