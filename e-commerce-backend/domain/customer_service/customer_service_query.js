
function makeCustomerServiceQuery(database){


    return Object.freeze({
        addCustomerService,
        getCustomerServiceById,
        getCutomerServiceByName,
        updateCustomerService,
        deleteCustomerService,
    })
async function addCustomerService({firstName,password,commision,lastName,name}){
   const[{insertId}] =await database.promise().query(`INSERT INTO customer_service SET first_name=?,password=?,
   commision=?,last_name=?,name=?`,[
        firstName,
        password,
        commision,
        lastName,
        name

    ])
const [[insertedUser]]=await database.promise().query(`SELECT * FROM customer_service WHERE id=?`,[insertId])
   return insertedUser
}
async function getCutomerServiceByName(name){
    console.log(name,'dd')
     const [customerService]= await database.promise().query(`SELECT * FROM customer_service WHERE name=?`,[name])
     console.log(customerService,'ser')
    return customerService
    }
async function getCustomerServiceById(id){
     const [customer]= await database.promise().query(`SELECT * FROM customer_service WHERE id=?`,[id])
     return customer
}

async function updateCustomerService(id,data){

await database.promise().query(`UPDATE customer_service  SET first_name=COALESCE(?,first_name),
password=COALESCE(?,password),commision=COALESCE(?,commision),last_name=COALESCE(?,last_name),
name=COALESCE(?,name)
 WHERE id=?`,[
             data.firstName,
             data.password,
             data.commision,
             data.lastName,
             data.name,
             id
    ])
const [[updated]]=await database.promise().query(`SELECT * FROM customer_service   WHERE id=?`,[
    id
])
return updated
}
async function deleteCustomerService(id){
    await database.promise().query(`DELETE FROM customer_service  WHERE id=?`,[
        id
    ])
    return 'successfully deleted'
}


     
}

module.exports={
    makeCustomerServiceQuery
}