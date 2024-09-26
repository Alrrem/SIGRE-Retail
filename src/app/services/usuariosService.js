const db = require('./Config/dbConfig');

async function getUsuarios() {
    const pool = await db.getConnection();
    const result = await pool.request().query('SELECT * FROM Usuarios');
    return result.recordset;
}

async function crearUsuario(usuario) {
    const pool = await db.getConnection();
    const result = await pool.request()
        .input('nombre', db.sql.VarChar, usuario.nombre)
        .input('email', db.sql.VarChar, usuario.email)
        .query('INSERT INTO Usuarios (nombre, email) VALUES (@nombre, @email)');
    return result.rowsAffected;
}

module.exports = {
    getUsuarios,
    crearUsuario
};
