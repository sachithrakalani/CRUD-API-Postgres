import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./config/db.js";
import createUserTable from "./data/createUserTable.js";
import errorHandling from "./middlewares/errorHandling.js";

dotenv.config();

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Error Handling middleware
app.use(errorHandling);

createUserTable();

//Testing Postgres Connection
app.get("/", async (req, res)=>{
  console.log("Start");
  const result = await pool.query("SELECT current_database()");
  console.log("result", result.rows);
  console.log("End");
  res.send(`The Database name is: ${result.rows[0].current_database}`)
})

//Create Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//Create Responces
app.get("/", (req, res) => {
  res.send("Hello Node");
});
