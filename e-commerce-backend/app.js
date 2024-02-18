const express=require("express")
const bodyParser=require("body-parser")
var cookieParser = require('cookie-parser')
const customersRoute=require("./route/customerRoute")
const customerService=require("./route/customerService")
const deliveryAgent=require("./route/deliveryAgentRoute")
const productUploader=require('./route/productUploderRoute')
const authRoute=require("./route/authRoute")
// const authGolbal=require("./util/globalAuth")
const app=express()

app.use(bodyParser.json())
app.use(cookieParser())


app.use('/auth',authRoute)
// app.use(authGolbal)
app.use("/customers",customersRoute)
app.use("/customerService",customerService)
app.use("/deliveryAgent",deliveryAgent)
app.use("/productUploder",productUploader)


module.exports=app