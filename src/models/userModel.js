import pool from "../config/db.js";

export const getAllUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const getUserById = async (id) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};

export const createUser = async (name, email) => {
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING * ",
    [name, email]
  );
  return result.rows[0];
};
