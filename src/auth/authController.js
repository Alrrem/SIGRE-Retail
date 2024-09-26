// src/auth/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');

exports.login = async (req, res) => {
  try {
    let user = await userModel.findUserByEmail(req.body.email);
    if (!user) {
      return res.status(401).send('Correo electrónico o contraseña incorrectos');
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).send('Correo electrónico o contraseña incorrectos');
    }

    const token = jwt.sign({ id: user.id, role: user.role }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).send('Error en el servidor');
  }
};
