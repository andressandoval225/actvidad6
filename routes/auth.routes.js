const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

// Rutas públicas
router.post("/register", authController.register);
router.post("/login", authController.login);

// Ruta protegida
router.get("/dashboard", authenticate, (req, res) => {
    res.json({
        message: "Bienvenido al panel",
        user: req.user
    });
});

// Ruta solo para administradores
router.post(
    "/admin/users",
    authenticate,
    authorize("admin"),
    (req, res) => {
        res.json({
            message: "Usuario creado exitosamente"
        });
    }
);

module.exports = router;