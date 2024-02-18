const db=require('../../config/db')
const {makeCustomerQuery}=require('./customer_query')
const customerQuery=makeCustomerQuery(db)
const  {getUserByPhoneNumberUseCase,getCustomerByIdUseCase,
addCustomerUseCase,updateCustomerUseCase,deleteCustomerUseCase,getCustomerByNameUseCase}=require("./customer_use_case")

exports.getCustomerByPhoneNumber=async(req,res)=>{
console.log('here')
        const customer=await getUserByPhoneNumberUseCase(req.params.phoneNo,customerQuery)
        
        res.json(customer)

}


exports.gertCustomerById=async(req,res)=>{
    const customer=await getCustomerByIdUseCase(req.params.id,customerQuery)
    res.json(customer)
}
exports.getCustomerByName=async(req,res)=>{
   const customer=await getCustomerByNameUseCase(req.params.name,customerQuery)
   res.json(customer)
}
exports.addCustomer=async(req,res)=>{
      const customer=await addCustomerUseCase(req.body,customerQuery)
      res.json(customer)
}

exports.updateCustomer=async(req,res)=>{
   const customer=await updateCustomerUseCase(req.body,req.params.id,customerQuery)
   res.json(customer)
}
exports.deleteCustomer=async(req,res)=>{
   const customer=await deleteCustomerUseCase(req.params.id,customerQuery)
   res.json(customer)
}
