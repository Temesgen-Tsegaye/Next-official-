const router = require("express").Router();
const productUploderController=require('../domain/product_uploder/product_uploder_controller')
const {checkError}=require("../util/errorHandler")
const {checkTokenUser}=require("../util/globalAuth")

router.get('/byName/:name',checkError(checkTokenUser),checkError(productUploderController.getProductUploderByName))
router.get('/byId/:id',checkError(checkTokenUser),checkError(productUploderController.getProductUploaderById))
router.post('/',checkError(productUploderController.addProductUploder))
router.put('/:id',checkError(checkTokenUser),checkError(productUploderController.updateProductUploder))
router.delete('/:id',checkError(checkTokenUser),checkError(productUploderController.deleteCustomerService))
module.exports=router