require('dotenv').config();
const express = require('express');
const logger = require('./middlewares/logger');
const sequelize = require('./config/database');

require('./models');

const app = express();

const PORT = 3000;

// Rutas
const usuarioRoutes = require('./routes/usuarios.routes');
const libroRoutes = require('./routes/libro.routes');
const prestamoRoutes = require('./routes/prestamo.routes');
const authRoutes = require('./routes/auth.routes');
const rolesRoutes = require('./routes/roles.routes');
const permisosRoutes = require('./routes/permisos.routes');


// Middlewares
app.use(express.json());
app.use(logger.logger);


// Rutas API
app.use('/usuarios', usuarioRoutes);
app.use('/libros', libroRoutes);
app.use('/prestamos', prestamoRoutes);
app.use('/auth', authRoutes);
app.use('/roles', rolesRoutes);
app.use('/permisos', permisosRoutes);


// Conexión Sequelize y servidor
sequelize.authenticate()
    .then(() => {
        console.log("✅ PostgreSQL conectado con Sequelize");

        return sequelize.sync({ alter: true });
    })
    .then(() => {
        console.log("✅ Modelos sincronizados");

        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("❌ Error de conexión:", error);
    });