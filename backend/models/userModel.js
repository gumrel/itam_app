const bcrypt = require("bcryptjs");
const pool = require("../config/db");

exports.getAllUsers = async () => {
  const query = "SELECT * FROM users";
  const { rows } = await pool.query(query);
  return rows;
};

exports.createUser = async (userData) => {
  const {
    firstName,
    email,
    group,
    telegram,
    password,
    isAdmin = false,
  } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  const query = `
    INSERT INTO users (first_name, email, group_name, telegram, password, isAdmin)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  const values = [firstName, email, group, telegram, hashedPassword, isAdmin];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

exports.getUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};
