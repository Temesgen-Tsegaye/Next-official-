const {makeDeliveryAgent}=require("./index")



exports.getDeliveryAgentUseCase= async (name,db)=>{
    return await db.getDeliveryAgentByName(name)
    

}
exports.addDeliveryAgentUseCase= async (payload,db)=>{
    const deliveryAgent=await makeDeliveryAgent(payload)
    

    return await db.addDeliveryAgent(deliveryAgent)


}
exports.updateDeiveryAgentUseCase=async(payload,id,db)=>{
    const deliveryAgent=await makeDeliveryAgent(payload,'UPDATING')
    return await db.updateDeliveryAgent(id,deliveryAgent)
}
exports.getDeliveryAgentUseCaseById=async(id,db)=>{
    return await db.getDeliveryById(id)
}

exports.deleteDeliveryAgentUseCase= async (id,db)=>{
    return await db.deleteDeliveryAgent(id)

}