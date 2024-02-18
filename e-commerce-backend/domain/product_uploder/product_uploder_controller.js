const db=require('../../config/db')
const {makeProductUploaderQuery}=require('./product_uploader_query')
const customerQuery=makeProductUploaderQuery(db)
const  {getProdutUploderByNameUseCase,getProductUploderByIdUseCase,
addProductUploderUseCase,updateProductUploderUseCase,deleteProductUploderUseCase}=require("./product_uploder_service_use_case")

exports.getProductUploderByName=async(req,res)=>{
console.log('here')
        const customer=await getProdutUploderByNameUseCase(req.params.name,customerQuery)
        
        res.json(customer)

}

exports.getProductUploaderById=async(req,res)=>{
    const customer=await getProductUploderByIdUseCase(req.params.id,customerQuery)
    res.json(customer)
}
exports.addProductUploder=async(req,res)=>{
      const customer=await addProductUploderUseCase(req.body,customerQuery)
      res.json(customer)
}

exports.updateProductUploder=async(req,res)=>{
   const customer=await updateProductUploderUseCase(req.body,req.params.id,customerQuery)
   res.json(customer)
}
exports.deleteCustomerService=async(req,res)=>{
   const customer=await deleteProductUploderUseCase(req.params.id,customerQuery)
   res.json(customer)
}
