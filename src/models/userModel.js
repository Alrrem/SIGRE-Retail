// src/models/userModel.js
const sql = require('mssql');
const dbConfig = require('../Config/dbConfig'); 

async function findUserByEmail(email) {
  try {
    let pool = await sql.connect(dbConfig);
    let result = await pool.request()
        .input('email', sql.VarChar, email)
        .query('SELECT * FROM Usuarios WHERE email = @email');
    return result.recordset[0]; 
  } catch (err) {
    console.error('Database connection error', err);
    throw err;
  }
}

module.exports = {
  findUserByEmail
};
