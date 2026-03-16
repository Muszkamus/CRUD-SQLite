"use client";

// --- Styles ---
import "../styles/homepage.css";

// --- React Hooks ---
import { useEffect, useRef, useState, useReducer } from "react";

// --- Components ----
import AddExpenseBox from "./AddExpenseBox";
import ExpenseHistoryLog from "./ExpenseHistoryLog";
import Row from "./Row";
// import Header from "./Header";

// --- Functions ---
import { addData, addTable, dataURL, deleteData } from "../functions/jobs";
import { NewExpense } from "../functions/expensesTypes";
import { handleDelete } from "../functions/deleteData";

// --- Fetch Expenses ---
import { fetchExpenses } from "../functions/fetchExpenses";
import {
  expensesInitialState,
  expensesReducer,
} from "../reducer/expensesReducer";
import {
  submitExpensesReducer,
  submitInitialState,
} from "../reducer/expenseFormReducer";

export default function HomePage() {
  // Fetched Expenses Reducer
  const [stateFetchedExpenses, dispatchFetchedExpenses] = useReducer(
    expensesReducer,
    expensesInitialState,
  );

  // Submit Expenses Reducer

  const [stateSubmitExpenses, dispatchSubmitExpenses] = useReducer(
    submitExpensesReducer,
    submitInitialState,
  );

  // Local UI Form States
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

  useEffect(() => {
    fetchExpenses(dispatchFetchedExpenses);
  }, []);

  async function addExpense(e: any) {
    e.preventDefault();

    const parsedAmount = Number(amount);

    if (
      !date ||
      !category ||
      !method ||
      !Number.isFinite(parsedAmount) ||
      parsedAmount <= 0 // Cannot be negative
    ) {
      return;
    }

    try {
      dispatchSubmitExpenses({
        type: "ADD_EXPENSES_SUBMIT",
        payload: {
          date: date,
          category: category,
          method: method,
          description: description,
          amount: amount,
        },
      });

      const response = await addData(stateSubmitExpenses);
      // dispatchSubmitExpenses({ type: "ADD_EXPENSES_PENDING" });

      const status = response.status;
      if (status === 201) {
        dispatchSubmitExpenses({ type: "ADD_EXPENSES_SUCCESS" });
        fetchExpenses(dispatchFetchedExpenses);
        setIsExpenseAdded(true);
        setDate("");
        setCategory("");
        setMethod("");
        setDescription("");
        setAmount("");
      } else {
        return;
      }
    } catch (err) {
      console.error("Failed to add Expenses");
      dispatchSubmitExpenses({
        type: "ADD_EXPENSES_ERROR",
        payload: { error: err },
      });
    }
  }

  return (
    <div>
      {/* <Header /> */}
      <div className="app">
        <div className="expenseColumn">
          <Row />
          <ExpenseHistoryLog
            handleDelete={handleDelete}
            expenses={stateFetchedExpenses.expenses}
            //dispatch={dispatch}
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
          addTable={addTable}
        />
      </div>
    </div>
  );
}
