#! /usr/bin/env node

const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR ( 255 ),
  content VARCHAR ( 511 ),
  timestamp timestamp default current_timestamp
);

INSERT INTO messages (author, content) 
VALUES
  ('Bryan', 'Hello there'),
  ('Odin', 'Oh! Hi!'),
  ('Damon', 'Whats up!');
`;
const host = process.env.HOST;
const user = process.env.USER;
const database = process.env.DB;
const password = process.env.PW;
const port = process.env.DB_PORT;

const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
