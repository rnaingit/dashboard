// db.js
const mysql = require('mysql2');
const config = require('./config/config');

// Create a MySQL pool for managing connections
const pool = mysql.createPool(config);

module.exports = pool;
