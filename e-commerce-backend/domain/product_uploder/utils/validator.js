
const validator=require("validator")
const bcrypt=require("bcrypt")
function buildcheckDuplicateName(db){
    
    return async function checkDuplaicateNamee(name){
        const user=await db.getProductUploaderByName(name)
        console.log(user)
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
   buildcheckDuplicateName,
   validatePassword,
   normalizeInput,
   encryptPassword
}