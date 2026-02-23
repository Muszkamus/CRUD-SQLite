const express = require("express");
const app = express();
const port = 8080;

const {
  createTable,
  insertUser,
  getUsers,
  getUser,
  deleteTable,
} = require("./db/statements");

const allowedOrigins = ["http://localhost:3000"];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

app.get("/addTable", (req, res) => {
  createTable();
  res.json({ message: "Table Added" });
});

app.get("/deleteTable", (req, res) => {
  deleteTable();
  res.json({ message: "Deleted" });
});
app.get("/add", (req, res) => {
  res.json({ message: "Added" });
});

app.get("/get", (req, res) => {
  const users = getUsers();
  res.json(users);
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
