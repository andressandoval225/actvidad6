const bcrypt = require("bcrypt");
const User = require("../models/User");
const Rol = require("../models/Rol");
const Permiso = require("../models/Permiso");
const token = require("../utils/jwt");


// Registro de usuario
const register = async ({ username, email, password, rol_id }) => {

  const existe = await User.findOne({
    where: { email }
  });

  if (existe) {
    throw new Error("El correo ya está registrado");
  }


  // La contraseña se encripta en el hook beforeCreate del modelo User
  const user = await User.create({
    username,
    email,
    password,
    rol_id
  });


  return {
    id: user.id,
    username: user.username,
    email: user.email,
    rol_id: user.rol_id
  };
};



// Inicio de sesión
const login = async ({ email, password }) => {

  const user = await User.findOne({
    where: { email },
    include: [
      {
        model: Rol,
        include: [Permiso]
      }
    ]
  });


  if (!user) {
    throw new Error("Credenciales inválidas");
  }


  const validPassword = await bcrypt.compare(
    password,
    user.password
  );


  if (!validPassword) {
    throw new Error("Credenciales inválidas");
  }


  const permisos = user.Rol.Permisos.map(
    permiso => permiso.nombre
  );


  return token.generateToken({
    id: user.id,
    rol_id: user.rol_id,
    permisos
  });
};



module.exports = {
  register,
  login
};