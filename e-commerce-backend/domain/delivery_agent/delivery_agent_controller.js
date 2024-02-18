const db=require('../../config/db')
const {makeDeliveryAgentQuery}=require('./delivery_query')
const deliveryQuery=makeDeliveryAgentQuery(db)
const  {addDeliveryAgentUseCase,updateDeiveryAgentUseCase,deleteDeliveryAgentUseCase,getDeliveryAgentUseCase,getDeliveryAgentUseCaseById}=require("./delivery_agent_use_case")


exports.getDeliveryAgentByUserName=async(req,res)=>{
    const deliveryAgent=await getDeliveryAgentUseCase(req.body.name,deliveryQuery)
    res.send(deliveryAgent)
}
exports.getDeliveryByIdController=async(req,res)=>{
    const deliveryAgent=await getDeliveryAgentUseCaseById(req.body.id,deliveryQuery)
    res.send(deliveryAgent)
}
exports.addDeliveryAgentController=async(req,res)=>{

      const deliveryAgent=await addDeliveryAgentUseCase(req.body,deliveryQuery)  
      res.send(deliveryAgent)  
}

exports.updateDeliveryAgentController=async(req,res)=>{
    const deliveryAgent=await updateDeiveryAgentUseCase(req.body,req.params.id,deliveryQuery)
    res.send(deliveryAgent)
}
exports.deleteDeliveryAgent=async(req,res)=>{
    const result=await  deleteDeliveryAgentUseCase(req.body.id,deliveryQuery)
    res.send(result)
}