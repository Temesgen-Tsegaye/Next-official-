
function buildMakeDeliveryAgent(validator){

    return async function makeDeliveryAgent(payload,up){
        
        if(!up){
            if(!payload.name || !payload.firstName || !payload.lastName || !payload.password||!payload.packageId
                ||!payload.vehicleId){
                throw new Error('All filds must be filled')
              }
              if(await validator.checkDuplaicateName(payload.name)){
                throw new Error('Duplicate name')
              }
          }
                
                  if(payload.password && !validator.validatePassword(payload.password)){
                    throw new Error('Min length is 8')
                  }
                  if(await validator.checkDuplaicateName(payload.name)){
                    throw new Error('Duplicate name')
                  }
          

    return Object.freeze(validator.normalizeInput(payload))
 
    }
    

    
}

module.exports={
    buildMakeDeliveryAgent
}