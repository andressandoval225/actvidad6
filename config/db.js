const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

pool.query("SELECT NOW()", (error, resultado) => {
    if (error) {
        console.log(error);
    } else {
        console.log(resultado.rows);
    }
});

module.exports = pool;