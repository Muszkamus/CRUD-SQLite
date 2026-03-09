const db = require("better-sqlite3")("database.db");

const createTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      category TEXT NOT NULL,
      method TEXT NOT NULL,
      description TEXT,
      amount INTEGER NOT NULL
    );
  `;
  db.prepare(sql).run();
};

const deleteTable = () => {
  db.prepare(`DROP TABLE IF EXISTS expenses;`).run();
};

const insertExpense = (date, category, method, description, amount) => {
  const sql = `
    INSERT INTO expenses (date, category, method, description, amount)
    VALUES (?, ?, ?, ?, ?);
  `;
  return db.prepare(sql).run(date, category, method, description, amount);
};

const deleteExpense = (id) => {
  return db.prepare(`DELETE FROM expenses WHERE id = ?`).run(id);
};

const getExpenses = () => {
  return db.prepare(`SELECT * FROM expenses`).all();
};

module.exports = {
  createTable,
  deleteTable,
  insertExpense,
  deleteExpense,
  getExpenses,
};
