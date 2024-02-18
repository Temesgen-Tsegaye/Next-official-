const router = require("express").Router();
const customerController=require('../domain/customers/customer_controller')
const {checkTokenUser}=require('../util/globalAuth')
const {checkError}=require("../util/errorHandler")
router.get('/byPhoneNumber/:phoneNo',checkError(checkTokenUser),checkError(customerController.getCustomerByPhoneNumber))
router.get('/byId/:id',checkError(checkTokenUser),checkError(customerController.gertCustomerById))
router.get('/byName/:name',checkError(checkTokenUser),checkError(customerController.getCustomerByName))
router.post('/',checkError(customerController.addCustomer))
router.put('/:id',checkError(checkTokenUser),checkError(customerController.updateCustomer))
router.delete('/:id',checkError(checkTokenUser),checkError(customerController.deleteCustomer))
module.exports=router