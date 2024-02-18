
 function makeCustomerQuery(database){


    return Object.freeze({
        addCustomer,
        getCustomerById,
        getCustomerByPhone,
        getCustomerByName,
        updateCustomer,
        deleteCustomer,
    })
async function addCustomer(payload){
   const[{insertId}] =await database.promise().query(`INSERT INTO customers SET phone_no=?,password=?,user_name=?`,[
        payload.phoneNumber,
        payload.password,
        payload.userName
    ])
const [[insertedUser]]=await database.promise().query(`SELECT * FROM customers WHERE id=?`,[insertId])
   return insertedUser
}
async function getCustomerByPhone(phoneNumber){
     const [customer]= await database.promise().query(`SELECT * FROM customers WHERE phone_no= ?`,[phoneNumber])
    return customer
    }
async function getCustomerById(id){
     const [customer]= await database.promise().query(`SELECT * FROM customers WHERE id=?`,[id])
     return customer
}
async function getCustomerByName(userName){
     const [customer]= await database.promise().query(`SELECT * FROM customers WHERE user_name=?`,[userName])
     return customer
}

async function updateCustomer(id,data){

await database.promise().query(`UPDATE customers SET user_name=COALESCE(?,user_name), 
phone_no=COALESCE(?,phone_no),password=COALESCE(?,password) WHERE id=?`,[
           data.userName,
           data.phoneNumber,
           data.password,
           id
    ])
const [[updated]]=await database.promise().query(`SELECT * FROM customers WHERE id=?`,[
    id
])
return updated
}
async function deleteCustomer(id){
    await database.promise().query(`DELETE FROM customers WHERE id=?`,[
        id
    ])
    return 'successfully deleted'
}


     
}

module.exports={
    makeCustomerQuery
}