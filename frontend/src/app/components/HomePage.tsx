"use client";

// --- Styles ---
import "../styles/homepage.css";

// --- React Hooks ---
import { useEffect, useRef, useState, useReducer } from "react";

// --- Components ----
import AddExpenseBox from "./AddExpenseBox";
import ExpenseHistoryLog from "./ExpenseHistoryLog";
import Row from "./Row";
import Header from "./Header/Header";
import FetchedExpenses from "./FetchedExpenses";

// --- Functions ---
import { addData, addTable } from "../functions/jobs";
import { handleDelete } from "../functions/deleteData";

// --- Fetch Expenses Reducer ---
import { fetchExpenses } from "../functions/fetchExpenses";
import {
  expensesInitialState,
  expensesReducer,
} from "../reducer/fetchedExpensesReducer";

// --- Add Expenses Reducer ---
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

    const submitExpensePayload = {
      date,
      category,
      method,
      description,
      amount: parsedAmount,
    };

    try {
      dispatchSubmitExpenses({
        type: "ADD_EXPENSES_SUBMIT",
        payload: submitExpensePayload,
      });

      const response = await addData(submitExpensePayload);
      // dispatchSubmitExpenses({ type: "ADD_EXPENSES_PENDING" });

      const status = response.status;

      if (status === 201) {
        fetchExpenses(dispatchFetchedExpenses);
        dispatchSubmitExpenses({ type: "ADD_EXPENSES_SUCCESS" });
        setDate("");
        setCategory("");
        setMethod("");
        setDescription("");
        setAmount("");

        setTimeout(() => {
          dispatchSubmitExpenses({ type: "RESET" });
        }, 2000);
      } else {
        return;
      }
    } catch (err) {
      dispatchSubmitExpenses({
        type: "ADD_EXPENSES_ERROR",
        payload: { error: err },
      });
    }
  }

  return (
    <div>
      <Header />
      <div className="app">
        <div>
          <Row />
          <ExpenseHistoryLog stateFetchedExpenses={stateFetchedExpenses}>
            <FetchedExpenses
              stateFetchedExpenses={stateFetchedExpenses}
              handleDelete={handleDelete}
              dispatchFetchedExpenses={dispatchFetchedExpenses}
            />
          </ExpenseHistoryLog>
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
          addTable={addTable}
          state={stateSubmitExpenses}
        />
      </div>
      {/* <p>UI Message : {stateSubmitExpenses.uiMessage}</p> */}
    </div>
  );
}
