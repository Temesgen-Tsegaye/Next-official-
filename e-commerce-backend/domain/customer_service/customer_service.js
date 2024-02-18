
function buildMakeCustomerService(validator){

    return async function makeCustomerService(payload,up){
            
  if(!up){
    if(!payload.name || !payload.firstName || !payload.lastName || !payload.password){
        throw new Error('All filds must be filled')
      }
      if(await validator.checkDuplaicateName(payload.name)){
        throw new Error('Duplicate name')
      }
      if(payload.password && !validator.validatePassword(payload.password)){
        throw new Error('Min length is 8')
      }
  }else{

    if(payload.name){
      if(await validator.checkDuplaicateName(payload.name)){
        throw new Error('Duplicate name')
      }
    }
   if(payload.password){
    if(payload.password && !validator.validatePassword(payload.password)){
      throw new Error('Min length is 8')
    }
   }
  

  }
        
         
         

        

    return Object.freeze(validator.normalizeInput(payload))
 
    }
    

    
}

module.exports={
    buildMakeCustomerService
}