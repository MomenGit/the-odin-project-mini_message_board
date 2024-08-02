const { Pool } = require('pg');
require('dotenv').config();
const host = process.env.HOST;
const role = process.env.USER;
const pw = process.env.PW;
const database = process.env.DB;
const port = process.env.DB_PORT;

const connectionString = `postgresql://${role}:${pw}@${host}:${port}/${database}`;

module.exports = new Pool({ connectionString });
