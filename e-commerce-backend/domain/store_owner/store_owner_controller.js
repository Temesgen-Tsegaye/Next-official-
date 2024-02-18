const db=require('../../config/db')
const {makeStoreOwnerQuery}=require('./store_owner_query')
const storeOwnerQuery=makeStoreOwnerQuery(db)
const  {getStoreOwnerById,
addStoreOwnerUseCase,updateStoreOwnerUseCase,deleteStoreOwnerUseCase}=require("./store_owner_use_case")

exports.getStoreOwnerById=async(req,res)=>{
console.log('here')
        const storeOwner=await getStoreOwnerById(req.params.name,storeOwnerQuery)
        
        res.json(storeOwner)

}


exports.addStoreOwner=async(req,res)=>{
      const storeOwner=await addStoreOwnerUseCase(req.body,storeOwnerQuery)
      res.json(storeOwner)
}

exports.updateStoreOwner=async(req,res)=>{
   const storeOwner=await updateStoreOwnerUseCase(req.body,req.params.id,storeOwnerQuery)
   res.json(storeOwner)
}
exports.deleteStoreOwner=async(req,res)=>{
   const customer=await deleteStoreOwnerUseCase(req.params.id,storeOwnerQuery)
   res.json(customer)
}
