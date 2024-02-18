const db=require('../../config/db')
const {buildcheckDuplicatePhoneNumbe,buildcheckDuplicateName,validatPhoneNumber,validatePassword,normalizeInput}=require('./customer_util/validator')
const {makeCustomerQuery}=require('./customer_query')
const {buildMakeCustomer}=require('./customer')
const customerQuery=makeCustomerQuery(db)

const checkDuplicatePhoneNumber=buildcheckDuplicatePhoneNumbe(customerQuery)
const checkDuplicateName=buildcheckDuplicateName(customerQuery)
  const makeCustomer=buildMakeCustomer({validatPhoneNumber,checkDuplicatePhoneNumber,checkDuplicateName,validatePassword,normalizeInput})








module.exports={
// ...require("./customer_controller"),
  makeCustomer
}
