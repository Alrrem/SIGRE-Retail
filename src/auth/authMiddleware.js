// src/auth/authMiddleware.js
function checkRole(role) {
    return (req, res, next) => {
      if (req.user.role === role) {
        next();
      } else {
        res.status(403).send('Acceso denegado');
      }
    };
  }
  module.exports = { checkRole };
  