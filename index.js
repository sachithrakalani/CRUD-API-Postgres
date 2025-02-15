import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Create Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//Create Responces
app.get("/", (req, res) => {
  res.send("Hello Node");
});
