// productosController.js
const express = require('express');
const router = express.Router();
const db = require('./dbConfig');

router.get('/productos', async (req, res) => {
  const productos = await db.query('SELECT * FROM Productos');
  res.json(productos);
});

router.post('/productos', async (req, res) => {
  const { nombre, precio } = req.body;
  await db.query('INSERT INTO Productos (nombre, precio) VALUES (?, ?)', [nombre, precio]);
  res.send('Producto añadido');
});

router.delete('/productos/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM Productos WHERE id = ?', [id]);
  res.send('Producto eliminado');
});

module.exports = router;
