const db = require('./dbConfig');

exports.obtenerHorarios = async () => {
  const horarios = await db.query('SELECT * FROM Horarios');
  return horarios.rows;
};

exports.actualizarHorario = async (horario) => {
  const { id, dia, inicio, fin } = horario;
  const resultado = await db.query('UPDATE Horarios SET dia = $2, inicio = $3, fin = $4 WHERE id = $1 RETURNING *', [id, dia, inicio, fin]);
  return resultado.rows[0];
};
