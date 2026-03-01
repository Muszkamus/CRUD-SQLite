"use client";

import "../styles/homepage.css";
import { useState, useEffect } from "react";
import AddExpenseBox from "./AddExpenseBox";
import Totals from "./Totals";
import ExpenseHistoryLog from "./ExpenseHistoryLog";
import Row from "./Row";

const expenseHistory: any = [];

function useLocalStorageState(initialState: any, key: string) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialState;

    const stored = window.localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialState;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default function HomePage() {
  const [date, setDate] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [method, setMethod] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [expenses, setExpenses] = useLocalStorageState([], expenseHistory);
  const [isExpenseAdded, setIsExpenseAdded] = useState<boolean>(false);
  const [selectedExpense, setSelectedExpense] = useState<String>("");
  const individualAmounts = expenses.map((e: any) => e.amount);
  const totalAmountSpent = individualAmounts.reduce(
    (acc: number, val: number) => acc + val,
    0,
  );

  function addExpense(e: any) {
    const parsedAmount = parseFloat(amount);
    e.preventDefault();

    if (
      !date ||
      !category ||
      !method ||
      !amount ||
      isNaN(parsedAmount) ||
      parsedAmount < 0
    ) {
      console.log("Please fill the mandatory boxes");
      return;
    }
    const uniqueID = new Date().getTime();
    const newExpense = {
      id: uniqueID,
      date,
      category,
      method,
      description,
      amount: parsedAmount,
    };

    if (!date || !category || !method || !amount) {
      return;
    } else {
      setIsExpenseAdded(true);
      setExpenses([...expenses, newExpense]);
      setDate("");
      setCategory("");
      setMethod("");
      setDescription("");
      setAmount("");
      setTimeout(() => {
        setIsExpenseAdded(false);
      }, 3000);
    }
  }

  return (
    <div className="app">
      <div className="expenseColumn">
        <Totals totalAmountSpent={totalAmountSpent} />
        <Row />
        <ExpenseHistoryLog
          expenses={expenses}
          setExpenses={setExpenses}
          selectedExpense={selectedExpense}
          setSelectedExpense={setSelectedExpense}
        />
      </div>

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
      />
    </div>
  );
}
