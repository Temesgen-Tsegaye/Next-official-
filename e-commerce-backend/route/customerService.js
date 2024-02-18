const router = require("express").Router();
const customerController=require('../domain/customer_service/customer_service_controller')
const {checkTokenUser}=require("../util/globalAuth")
const {checkError}=require("../util/errorHandler")
router.get('/byName/:name',checkError(checkTokenUser),checkError(customerController.getCustomerServiceByName))
router.get('/byId/:id',checkError(checkTokenUser),checkError(customerController.gertCustomerServiceById))
router.post('/',checkError(customerController.addCustomerService))
router.put('/:id',checkError(checkTokenUser),checkError(customerController.updateCustomerService))
router.delete('/:id',checkError(checkTokenUser),checkError(customerController.deleteCustomerService))
module.exports=router