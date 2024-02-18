
function makeProductUploaderQuery(database){


    return Object.freeze({
        addProductUploader,
        getProducUploaderById,
        getProductUploaderByName,
        updateProductUploader,
        deleteProductUploader,
    })
async function addProductUploader({firstName,password,commission,lastName,name}){
   const[{insertId}] =await database.promise().query(`INSERT INTO product_uploader SET first_name=?,password=?,
  last_name=?,name=?`,[
        firstName,
        password,
       
        lastName,
        name

    ])
const [[insertedUser]]=await database.promise().query(`SELECT * FROM product_uploader WHERE id=?`,[insertId])
   return insertedUser
}
async function getProductUploaderByName(name){
    console.log(name,'dd')
     const [customerService]= await database.promise().query(`SELECT * FROM product_uploader WHERE name=?`,[name])
     console.log(customerService,'ser')
    return customerService
    }
async function getProducUploaderById(id){
     const [customer]= await database.promise().query(`SELECT * FROM product_uploader WHERE id=?`,[id])
     return customer
}

async function updateProductUploader(id,data){

await database.promise().query(`UPDATE product_uploader  SET first_name=COALESCE(?,first_name),
password=COALESCE(?,password),commission=COALESCE(?,commission),last_name=COALESCE(?,last_name),
name=COALESCE(?,name)
 WHERE id=?`,[
             data.firstName,
             data.password,
             data.commission,
             data.lastName,
             data.name,
             id
    ])
const [[updated]]=await database.promise().query(`SELECT * FROM product_uploader   WHERE id=?`,[
    id
])
return updated
}
async function deleteProductUploader(id){
    await database.promise().query(`DELETE FROM product_uploader  WHERE id=?`,[
        id
    ])
    return 'successfully deleted'
}


     
}

module.exports={
    makeProductUploaderQuery
}