const {makeProductUploader}=require('./index')
exports.getProdutUploderByNameUseCase=async (name,db)=>{
    
   return  await db.getProductUploaderByName(name)
  
}
exports.getProductUploderByIdUseCase=async(id,db)=>{

      return await db.getProducUploaderById(id)
}
exports.addProductUploderUseCase=async(payload,db)=>{
         const customer= await makeProductUploader(payload)
         
         return await db.addProductUploader(customer)
}
exports.updateProductUploderUseCase=async(payload,id,db)=>{
    
    const customerPayload=await makeProductUploader(payload,'upgrading')
    return await db.updateProductUploader(id,customerPayload)
}
exports.deleteProductUploderUseCase=async(id,db)=>{
    
  
    return await db.deleteProductUploader(id)
}
