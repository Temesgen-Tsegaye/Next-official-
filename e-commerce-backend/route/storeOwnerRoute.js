const router = require("express").Router();
const storeOwner=require('../domain/store_owner/store_owner_controller')


router.get('/byId/:id',storeOwner.getStoreOwnerById)
router.post('/',storeOwner.addStoreOwner)
router.put('/:id',storeOwner.updateStoreOwner)
router.delete('/:id',storeOwner.deleteStoreOwner)
module.exports=router