const db=require('../../config/db')
const {buildcheckDuplicateName,normalizeInput,validatePassword}=require('./utils/validator')
const {makeProductUploaderQuery}=require('./product_uploader_query')
const {buildMakeProductUploader}=require('./product_uploader')
const productUploader=makeProductUploaderQuery(db)

const checkDuplaicateName=buildcheckDuplicateName(productUploader)
const makeProductUploader=buildMakeProductUploader({checkDuplaicateName,validatePassword,normalizeInput})








module.exports={
// ...require("./customer_controller"),
  makeProductUploader
}
