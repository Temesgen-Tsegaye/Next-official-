
function makeDeliveryAgentQuery(database){


    return Object.freeze({
        addDeliveryAgent,
        getDeliveryById,
        getDeliveryAgentByName,
        updateDeliveryAgent,
        deleteDeliveryAgent,
    })
async function addDeliveryAgent(payload){
   const[{insertId}] =await database.promise().query(`INSERT INTO delivery_agent SET name=?,password=?,vehicle_id=?,
   package_id=?,last_name=?,first_name=?`,[
        payload.name,
        payload.password,
        payload.vehicleId,
        payload.packageId,
        payload.lastName,
        payload.firstName,
    ])
const [[insertedUser]]=await database.promise().query(`SELECT * FROM delivery_agent WHERE id=?`,[insertId])
   return insertedUser
}
async function getDeliveryAgentByName(name){
     const [deliveryMan]= await database.promise().query(`SELECT * FROM delivery_agent WHERE name= ?`,[name])
    return deliveryMan
    }
async function getDeliveryById(id){
     const [customer]= await database.promise().query(`SELECT * FROM delivery_agent WHERE id=?`,[id])
     return customer
}

async function updateDeliveryAgent(id,data){

    await database.promise().query(`UPDATE delivery_agent  SET first_name=COALESCE(?,first_name),
    password=COALESCE(?,password),commision=COALESCE(?,commision),last_name=COALESCE(?,last_name),
    name=COALESCE(?,name),package_id=COALESCE(?,package_id),vehicle_id=COALESCE(?,vehicle_id),
    rating=COALESCE(?,rating)
     WHERE id=?`,[
                 data.firstName,
                 data.password,
                 data.commision,
                 data.lastName,
                 data.name,
                 data.packageId,
                 data.vehicleId,
                 data.rating,
                 id
        ])
    const [[updated]]=await database.promise().query(`SELECT * FROM delivery_agent   WHERE id=?`,[
        id
    ])
    return updated
    }
async function deleteDeliveryAgent(id){
    await database.promise().query(`DELETE FROM delivery_agent  WHERE id=?`,[
        id
    ])
    return 'successfully deleted'
}


     
}

module.exports={
    makeDeliveryAgentQuery
}