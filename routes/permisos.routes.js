const express = require("express");
const router = express.Router();

const permisoController = require("../controllers/permiso.controller");
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");


// Obtener todos los permisos
router.get(
    "/",
    authenticate,
    authorize("gestionar_permisos"),
    permisoController.getAll
);


// Obtener permiso por id
router.get(
    "/:id",
    authenticate,
    authorize("gestionar_permisos"),
    permisoController.getById
);


// Crear permiso
router.post(
    "/",
    authenticate,
    authorize("gestionar_permisos"),
    permisoController.create
);


// Actualizar permiso
router.put(
    "/:id",
    authenticate,
    authorize("gestionar_permisos"),
    permisoController.update
);


// Eliminar permiso
router.delete(
    "/:id",
    authenticate,
    authorize("gestionar_permisos"),
    permisoController.remove
);


module.exports = router;