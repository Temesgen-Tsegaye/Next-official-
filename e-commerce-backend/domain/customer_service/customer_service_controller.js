const db=require('../../config/db')
const {makeCustomerServiceQuery}=require('./customer_service_query')
const customerQuery=makeCustomerServiceQuery(db)
const  {getCustomerServiceByNameUseCase,getCustomerServiceByIdUseCase,
addCustomerServiceUseCase,updateCustomerServiceUseCase,deleteCustomerServiceUseCase}=require("./customer_service_use_case")

exports.getCustomerServiceByName=async(req,res)=>{
console.log('here')
        const customer=await getCustomerServiceByNameUseCase(req.params.name,customerQuery)
        
        res.json(customer)

}


exports.gertCustomerServiceById=async(req,res)=>{
    const customer=await getCustomerServiceByIdUseCase(req.params.id,customerQuery)
    res.json(customer)
}
exports.addCustomerService=async(req,res)=>{
      const customer=await addCustomerServiceUseCase(req.body,customerQuery)
      res.json(customer)
}

exports.updateCustomerService=async(req,res)=>{
   const customer=await updateCustomerServiceUseCase(req.body,req.params.id,customerQuery)
   res.json(customer)
}
exports.deleteCustomerService=async(req,res)=>{
   const customer=await deleteCustomerServiceUseCase(req.params.id,customerQuery)
   res.json(customer)
}
