require("dotenv").config();   // MUST be FIRST LINE

const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

pool.query("SELECT NOW()")
  .then(() => console.log("Database connected ✅"))
  .catch(err => console.error("Database error:", err));

app.get("/", (req, res) => {
  res.json({
    message: "Backend running 🚀",
    status: "success"
  });
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
