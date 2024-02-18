
function makeStoreOwnerQuery(database){


    return Object.freeze({
        addStoreOwner,
        getStoreOwnerById,
        updateStoreOwner,
        deleteStoreOwner,
    })
async function addStoreOwner(name){
   const[{insertId}] =await database.promise().query(`INSERT INTO store_owner SET name=?`,[
        name,
    ])
const [[insertedUser]]=await database.promise().query(`SELECT * FROM store_owner WHERE id=?`,[insertId])
   return insertedUser
}

async function getStoreOwnerById(id){
     const [storeOwner]= await database.promise().query(`SELECT * FROM store_owner WHERE id=?`,[id])
     return storeOwner
}

async function updateStoreOwner(id,data){

await database.promise().query(`UPDATE store_owner SET name=? WHERE id=?`,[
           data.name,
           id
    ])
const [[updated]]=await database.promise().query(`SELECT * FROM store_owner WHERE id=?`,[
    id
])
return updated
}
async function deleteStoreOwner(id){
    await database.promise().query(`DELETE FROM store_owner WHERE id=?`,[
        id
    ])
    return 'successfully deleted'
}


     
}

module.exports={
    makeStoreOwnerQuery
}