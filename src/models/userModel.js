import pool from "../config/db.js";

export const getAllUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const getUserById = async (id) => {
    const result = await pool.query("SELECT * FROM user WHERE id = $1", [id]);
    return result.rows[0];
  };
  