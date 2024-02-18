const {makeStoreOwner}=require('./index')

exports.getStoreOwnerById=async(id,db)=>{

      return await db.getStoreOwnerById(id)
}
exports.addStoreOwnerUseCase=async(phoneNumber,db)=>{
         const customer= await makeStoreOwner(phoneNumber)
         
         return await db.addStoreOwner(customer)
}
exports.updateStoreOwnerUseCase=async(phoneNumber,id,db)=>{
    
    const customerPayload=await makeStoreOwner(phoneNumber,'upgrading')
    return await db.updateStoreOwner(id,customerPayload)
}
exports.deleteStoreOwnerUseCase=async(id,db)=>{
    
  
    return await db.deleteStoreOwner(id)
}
