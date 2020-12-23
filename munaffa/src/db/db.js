const { Client } = require("pg");
//Connecting to Database
require("dotenv").config();
const client = new Client({
  connectionString: process.env.PSQL_URL,
});

client.connect();
module.exports = client;
