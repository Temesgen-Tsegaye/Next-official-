const db=require('../../config/db')
const {buildcheckDuplicateName,normalizeInput,validatePassword}=require('./utils/validation')
const {makeDeliveryAgentQuery}=require('./delivery_query')
const {buildMakeDeliveryAgent}=require('./delivery')
const deliveryAgentQuery=makeDeliveryAgentQuery(db)

const checkDuplaicateName=buildcheckDuplicateName(deliveryAgentQuery)
  const makeDeliveryAgent=buildMakeDeliveryAgent({checkDuplaicateName,validatePassword,normalizeInput})








module.exports={
// ...require("./customer_controller"),
  makeDeliveryAgent
}
