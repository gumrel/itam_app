const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool
  .connect()
  .then((client) => {
    console.log("Connected psg");
    client.release();
  })
  .catch((err) => console.error("Error psg", err.message));

module.exports = pool;
