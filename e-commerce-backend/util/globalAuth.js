const jwt = require("jsonwebtoken");
const db = require("../config/db");
const bcrypt = require("bcrypt");
const { equals } = require("validator");
const checkTokenUser = async (req, res, next) => {
   console.log(req.cookie)
  if (!req.cookies?.jwt) {
    throw new Error("No token provided");
   
  }
  console.log("here");
  try {
    await jwt.verify(req.cookies.jwt, "keykey");
  } catch (e) {
    throw new Error(e);
  }

  next();
};

const customerLogin = async (loginPayload) => {
  const customer = await db
    .promise()
    .query(`SELECT * FROM customer WHERE user_name=?`, [loginPayload.userName]);

  if (!customer[0].length) {
    throw new Error("no user found");
  }
  const isPasswordValid = await bcrypt.compare(
    loginPayload.password,
    customer[0][0].password
  );
  if (!isPasswordValid) {
    throw new Error("Incorrect password");
  }

  const token = jwt.sign({ id: customer[0][0].id }, `keykey`, {
    expiresIn: "10m",
  });
  const cookieOptions = {
    httpOnly: true,

    secure: true,
  };
  customer[0][0].password = undefined;

  const customerExtract = { ...customer[0][0] };

  return {
    token,
    cookieOptions,
    customerExtract,
  };
};
const customerServiceLogin=async(loginPayload)=>{
  
    const customerService = await db
      .promise()
      .query(`SELECT * FROM customer_service WHERE name=?`, [loginPayload.name]);
  
    if (!customerService[0].length) {
      throw new Error("no user found");
    }
    const isPasswordValid = await bcrypt.compare(
      loginPayload.password,
      customerService[0][0].password
    );
    if (!isPasswordValid) {
      throw new Error("Incorrect password");
    }
  
    const token = jwt.sign({ id: customerService[0][0].id }, `keykey`, {
      expiresIn: "10m",
    });
    const cookieOptions = {
      httpOnly: true,
  
      secure: true,
    };
    customerService[0][0].password = undefined;
  
    const customerServiceExtract = { ...customerService[0][0] };
  
    return {
      token,
      cookieOptions,
customerServiceExtract
    };
  
}
const deliveryAgentLogin=async(loginPayload)=>{
  console.log(loginPayload,'PAY')
  const deliveryAgent = await db
    .promise()
    .query(`SELECT * FROM delivery_agent WHERE name=?`, [loginPayload.name]);

  if (!deliveryAgent[0].length) {
    throw new Error("no user found");
  }
  const isPasswordValid = await bcrypt.compare(
    loginPayload.password,
    deliveryAgent[0][0].password
  );
  if (!isPasswordValid) {
    throw new Error("Incorrect password");
  }

  const token = jwt.sign({ id: deliveryAgent[0][0].id }, `keykey`, {
    expiresIn: "10m",
  });
  const cookieOptions = {
    httpOnly: true,

    secure: true,
  };
  deliveryAgent[0][0].password = undefined;

  const deliveryAgentExtract = { ...deliveryAgent[0][0] };

  return {
    token,
    cookieOptions,
deliveryAgentExtract
  };

}

const productUploader=async(loginPayload)=>{
  console.log(loginPayload,'PAY')
  const uploader = await db
    .promise()
    .query(`SELECT * FROM product_uploader WHERE name=?`, [loginPayload.name]);

  if (!uploader[0].length) {
    throw new Error("no user found");
  }
  const isPasswordValid = await bcrypt.compare(
    loginPayload.password,
    uploader[0][0].password
  );
  if (!isPasswordValid) {
    throw new Error("Incorrect password");
  }

  const token = jwt.sign({ id: deliveryAgent[0][0].id }, `keykey`, {
    expiresIn: "10m",
  });
  const cookieOptions = {
    httpOnly: true,

    secure: true,
  };
  uploader[0][0].password = undefined;

  const uploaderExtract = { ...uploader[0][0] };

  return {
    token,
    cookieOptions,
uploaderExtract
  };

}


const login = async (req, res) => {
  
  if (req.query.type == "CUSTOMER") {
    const { token, cookieOptions, customerExtract } = await customerLogin(
      req.body
    );

    res.cookie("jwt", token, cookieOptions);
    es.status(200).json({
      
      data: {
        customer: customerExtract,
      },
    });
  }else if(req.query.type=='CUSTOMER_SERVICE'){
    console.log(req.body,req.query)

    const {token,cookieOptions,customerServiceExtract}=await customerServiceLogin(req.body)
    res.cookie("jwt", token, cookieOptions);
    res.status(200).json({
      
      data: {
        customerService:customerServiceExtract,
      },
    });
  }else if(req.query.type=='DELIVERY_AGENT'){
    console.log('hey')
    const {token,cookieOptions,deliveryAgentExtract}=await deliveryAgentLogin(req.body)
    res.cookie("jwt", token, cookieOptions);
    res.status(200).json({
      
      data: {
        deliveryAgent:deliveryAgentExtract,
      },
    });
  }else if(req.query.type='PRODUCT_UPLOADER'){
    const {token,cookieOptions,uploaderExtract}=await productUploader(req.body)
    res.cookie("jwt", token, cookieOptions);
    res.status(200).json({
      
      data: {
        uploader:uploaderExtract,
      },
    });
  }
};

module.exports = {
  checkTokenUser,
  login,
};
