const sql = require('mssql');

const config = {
  user: 'tuUsuario', // Usuario de la base de datos
  password: 'tuContraseña', // Contraseña de la base de datos
  server: 'DOROTEO\\SQLEXPRESS01', // Servidor de SQL
  database: 'SIGRE_Retail', // Base de datos
  options: {
    encrypt: false, 
  },
};

sql.connect(config, (err) => {
  if (err) {
    console.log('Error en la conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos SQL Server');
  }
});

module.exports = sql;
