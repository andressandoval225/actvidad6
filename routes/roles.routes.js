const express = require("express");
const router = express.Router();

const rolController = require("../controllers/rol.controller");
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");


// Obtener todos los roles
router.get(
    "/",
    authenticate,
    authorize("gestionar_roles"),
    rolController.getAll
);


// Obtener rol por id
router.get(
    "/:id",
    authenticate,
    authorize("gestionar_roles"),
    rolController.getById
);


// Crear rol
router.post(
    "/",
    authenticate,
    authorize("gestionar_roles"),
    rolController.create
);


// Actualizar rol
router.put(
    "/:id",
    authenticate,
    authorize("gestionar_roles"),
    rolController.update
);


// Eliminar rol
router.delete(
    "/:id",
    authenticate,
    authorize("gestionar_roles"),
    rolController.remove
);


module.exports = router;