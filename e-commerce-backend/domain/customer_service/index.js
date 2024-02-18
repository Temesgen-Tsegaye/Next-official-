const db=require('../../config/db')
const {buildcheckDuplicateName,normalizeInput,validatePassword}=require('./utils/validator')
const {makeCustomerServiceQuery}=require('./customer_service_query')
const {buildMakeCustomerService}=require('./customer_service')
const customerQuery=makeCustomerServiceQuery(db)

const checkDuplaicateName=buildcheckDuplicateName(customerQuery)
const makeCustomerService=buildMakeCustomerService({checkDuplaicateName,validatePassword,normalizeInput})








module.exports={
// ...require("./customer_controller"),
  makeCustomerService
}
