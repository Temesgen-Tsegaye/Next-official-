const router = require("express").Router();
const deliveryAgentController=require('../domain/delivery_agent/delivery_agent_controller')
const {checkTokenUser}=require("../util/globalAuth")
const {checkError}=require("../util/errorHandler")

router.post('/',checkError(deliveryAgentController.addDeliveryAgentController))
router.put('/:id',checkError(checkTokenUser),checkError(deliveryAgentController.updateDeliveryAgentController))
router.get('/byName',checkError(checkTokenUser),checkError(deliveryAgentController.getDeliveryAgentByUserName))
router.get('/byId',checkError(checkTokenUser),checkError(deliveryAgentController.getDeliveryByIdController))
router.delete('/',checkError(checkTokenUser),checkError(deliveryAgentController.deleteDeliveryAgent))
module.exports=router