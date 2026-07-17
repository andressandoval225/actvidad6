const authService = require("../services/auth.service");

// Registro de usuario
const register = async (req, res, next) => {
  try {
    const usuario = await authService.register(req.body);

    res.status(201).json({
      message: "Usuario registrado correctamente",
      usuario,
    });
  } catch (error) {
    next(error);
  }
};

// Inicio de sesión
const login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body);

    res.status(200).json({
      message: "Inicio de sesión exitoso",
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};