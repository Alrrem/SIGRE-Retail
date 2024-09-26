const db = require('./dbConfig'); // Asegúrate de ajustar la ruta según tu configuración
const bcrypt = require('bcryptjs');

exports.registrarUsuario = async (usuario) => {
  const { idEmpleado, email, password, nombreEmpleado, cargo } = usuario;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const nuevoUsuario = await db.query(
    'INSERT INTO Empleados (idEmpleado, email, password, nombreEmpleado, cargo) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [idEmpleado, email, hashedPassword, nombreEmpleado, cargo]
  );
  return nuevoUsuario.rows[0];
};

exports.autenticarUsuario = async (idEmpleado, password) => {
  const usuario = await db.query(
    'SELECT * FROM Empleados WHERE idEmpleado = $1',
    [idEmpleado]
  );
  if (usuario.rows.length && bcrypt.compareSync(password, usuario.rows[0].password)) {
    return usuario.rows[0];
  }
  return null;
};
