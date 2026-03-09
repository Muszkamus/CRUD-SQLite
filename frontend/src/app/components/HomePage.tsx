"use client";

import "../styles/homepage.css";
import { useEffect, useRef, useState } from "react";
import AddExpenseBox from "./AddExpenseBox";
import ExpenseHistoryLog from "./ExpenseHistoryLog";
import Row from "./Row";
import { addData, addTable, dataURL, deleteData } from "../functions/jobs";

type Expense = {
  id: number;
  date: string;
  category: string;
  method: string;
  description: string;
  amount: number;
};

type NewExpense = {
  date: string;
  category: string;
  method: string;
  description: string;
  amount: number;
};

export default function HomePage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [method, setMethod] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpenseAdded, setIsExpenseAdded] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  async function fetchExpenses() {
    try {
      const response = await fetch(`${dataURL}/retrieveTable`);

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      setExpenses(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchExpenses();
  }, []);

  async function addExpense(e: any) {
    e.preventDefault();

    const parsedAmount = Number(amount);

    // Required fields: date/category/method + valid positive amount
    if (
      !date ||
      !category ||
      !method ||
      !Number.isFinite(parsedAmount) ||
      parsedAmount <= 0
    ) {
      console.log("Please fill the mandatory boxes");
      return;
    }

    const newExpense: NewExpense = {
      date,
      category,
      method,
      description, // optional in UX; fine to store empty string
      amount: parsedAmount,
    };

    try {
      addData(newExpense);
      setTimeout(() => {
        fetchExpenses();
      }, 300);

      setIsExpenseAdded(true);
      setDate("");
      setCategory("");
      setMethod("");
      setDescription("");
      setAmount("");

      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setIsExpenseAdded(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to add expense:", err);
      // optionally show UI error state here
    }
  }

  return (
    <div className="app">
      <div className="expenseColumn">
        <Row />
        <ExpenseHistoryLog
          deleteData={deleteData}
          expenses={expenses}
          setExpenses={setExpenses}
        />
      </div>

      <button onClick={fetchExpenses}>REFRESH</button>

      <AddExpenseBox
        date={date}
        setDate={setDate}
        category={category}
        setCategory={setCategory}
        method={method}
        setMethod={setMethod}
        description={description}
        setDescription={setDescription}
        amount={amount}
        setAmount={setAmount}
        addExpense={addExpense}
        isExpenseAdded={isExpenseAdded}
        addTable={addTable}
      />
    </div>
  );
}
