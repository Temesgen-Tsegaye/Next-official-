const jwt = require("jsonwebtoken");
const db = require("../../config/db");
const bcrypt = require("bcrypt");


const customerLogin = async (loginPayload) => {
  const customer = await db
    .promise()
    .query(`SELECT * FROM customers WHERE user_name=?`, [loginPayload.userName]);

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
    expiresIn: "60m",
  });
  const cookieOptions = {
    httpOnly: true,

    // secure: true,
  };
  customer[0][0].password = undefined;

  const customerExtract = { ...customer[0][0] };

  return {
    token,
    cookieOptions,
    customerExtract,
  };
};
const login = async (req, res) => {
  if (req.query.type == "CUSTOMER") {
    const { token, cookieOptions, customerExtract } = await customerLogin(
      req.body
    );

    res.cookie("jwt", token, cookieOptions);
    res.status(200).json({
      
      data: {
        customer: customerExtract,
      },
    });
  }else if(req.query.type=="CUSTOMER_SERVICE"){
    const { token, cookieOptions, customerExtract } = await cus(
      req.body
    );
  }
};

module.exports = {
  login,
};
