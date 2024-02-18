const {makeCustomer}=require('./index')
exports.getUserByPhoneNumberUseCase=async (phoneNumber,db)=>{
    
   return  await db.getCustomerByPhone(phoneNumber)
  
}
exports.getCustomerByIdUseCase=async(id,db)=>{

      return await db.getCustomerById(id)
}
exports.getCustomerByNameUseCase=async(name,db)=>{
    return await db.getCustomerByName(name)
}
exports.addCustomerUseCase=async({phoneNumber,userName,password},db)=>{
         const customer= await makeCustomer({phoneNumber,userName,password})
         
         return await db.addCustomer(customer)
}

exports.updateCustomerUseCase=async({phoneNumber,userName,password},id,db)=>{
    
    const customerPayload=await makeCustomer({phoneNumber,userName,password},'upgrading')
    return await db.updateCustomer(id,customerPayload)
}
exports.deleteCustomerUseCase=async(id,db)=>{
    
  
    return await db.deleteCustomer(id)
}
