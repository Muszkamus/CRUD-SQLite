const db = require("better-sqlite3")("database.db");

const createTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      age INTEGER) `;
  db.prepare(sql).run();
};

const deleteTable = () => {
  const sql = `
  DROP TABLE users`;
  db.prepare(sql).run();
};

const insertUser = (name, age) => {
  const sql = `
    INSERT INTO users (name, age)
    VALUES (?, ?)`;
  return db.prepare(sql).run(name, age);
};

const getUsers = () => {
  const sql = `SELECT * FROM users`;
  return db.prepare(sql).all();
};

const getUser = (id) => {
  const sql = `SELECT * FROM users WHERE id = ?`;
  return db.prepare(sql).get(id);
};

module.exports = { createTable, deleteTable, insertUser, getUsers, getUser };
