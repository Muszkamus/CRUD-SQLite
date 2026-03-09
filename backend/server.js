const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

const {
  createTable,
  insertExpense,
  getExpenses,
  deleteTable,
  deleteExpense,
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

app.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  console.log(id);

  deleteExpense(id);
});

app.post("/addData", async (req, res) => {
  try {
    const { date, category, method, description, amount } = req.body;

    const result = await insertExpense(
      date,
      category,
      method,
      description,
      amount,
    );

    res.status(201).json({
      message: "Expense added successfully",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add expense" });
  }
});
app.get("/retrieveTable", (req, res) => {
  const expenses = getExpenses();
  res.json(expenses);
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
