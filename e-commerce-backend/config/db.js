/**
 * db
 * @module db
 */
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sre_e-commerce",
});
//78da!@#SRE**

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

module.exports = db;
