const db = require('./dbConfig');

exports.registrarVenta = async (venta) => {
  const { productos, totalVenta, idEmpleado } = venta;
  const resultadoVenta = await db.query('INSERT INTO Ventas (totalVenta, idEmpleado) VALUES ($1, $2) RETURNING id', [totalVenta, idEmpleado]);
  const idVenta = resultadoVenta.rows[0].id;

  // Registrar cada producto vendido
  productos.forEach(async (producto) => {
    await db.query('INSERT INTO DetalleVenta (idVenta, idProducto, cantidad) VALUES ($1, $2, $3)', [idVenta, producto.id, producto.cantidad]);
  });

  return idVenta;
};
