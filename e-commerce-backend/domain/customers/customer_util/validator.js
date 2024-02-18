const validator=require("validator")
const bcrypt=require("bcrypt")
function validatPhoneNumber(phoneNumber){
    
    return  validator.isMobilePhone(phoneNumber,"any",{strictMode:false})
}

function buildcheckDuplicatePhoneNumbe(db){
    
    return async function checkDuplaicatePhoneNumber(phoneNumber){
        const user=await db.getCustomerByPhone(phoneNumber)
        return  user.length
    }


}
function buildcheckDuplicateName(db){
    
    return async function checkDuplaicateName(name){
        const user=await db.getCustomerByName(name)
        return  user.length
    }


}
function validatePassword(password){
    console.log(validator.isLength(password,{min:8}))
   return validator.isLength(password,{min:8})  

}
async function encryptPassword(password){
    const saltRound=10
    const salt = await bcrypt.genSalt(saltRound);
    return await bcrypt.hash(password, salt);

}

async function normalizeInput(payload){
   
    const trimmedObject = {};
       
      
        for (const key in payload) {
        
            const value = payload[key];
      
            
            if (typeof value === 'string') {
              trimmedObject[key] = value.trim();
            } else {
            
              trimmedObject[key] = value;
            }
          }
      
        const hashed=payload.password&&await encryptPassword(trimmedObject.password)
        trimmedObject.password=hashed
      
        return trimmedObject;
      
      
      

}

module.exports={
    validatPhoneNumber,
    buildcheckDuplicatePhoneNumbe,
    buildcheckDuplicateName,
    validatePassword,
    normalizeInput
}