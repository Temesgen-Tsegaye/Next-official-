const {makeCustomerService}=require('./index')
exports.getCustomerServiceByNameUseCase=async (name,db)=>{
    
   return  await db.getCutomerServiceByName(name)
  
}
exports.getCustomerServiceByIdUseCase=async(id,db)=>{

      return await db.getCustomerServiceById(id)
}
exports.addCustomerServiceUseCase=async(payload,db)=>{
         const customer= await makeCustomerService(payload)
         
         return await db.addCustomerService(customer)
}
exports.updateCustomerServiceUseCase=async(payload,id,db)=>{
    
    const customerPayload=await makeCustomerService(payload,'upgrading')
    return await db.updateCustomerService(id,customerPayload)
}
exports.deleteCustomerServiceUseCase=async(id,db)=>{
    
  
    return await db.deleteCustomerService(id)
}
