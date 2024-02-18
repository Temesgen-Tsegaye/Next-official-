const validator=require("validator")


function buildcheckDuplicateUserName(db){
    
    return async function checkDuplaicatePhoneNumber(name){
        const user=await db.getStoreOwnerByName(name)
        return  user.length
    }


}

module.exports={

    buildcheckDuplicateUserName
}