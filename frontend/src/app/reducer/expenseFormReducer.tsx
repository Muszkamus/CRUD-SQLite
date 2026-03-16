// this reducer is strictly to be used when submitting new expense to the database

import { Action, State } from "./expensesReducerTypes";

const submitInitialState: State = {
  date: "",
  category: "",
  method: "",
  description: "",
  amount: "",
  isExpenseAdded: false,
  uiMessage: "",
  error: "",
};

function submitExpensesReducer(state: State, action: Action): State {
  switch (action.type) {
    case "RESET":
      return submitInitialState;
    case "ADD_EXPENSES_SUBMIT":
      return {
        ...state,
        date: action.payload.date,
        category: action.payload.category,
        method: action.payload.method,
        description: action.payload.description,
        amount: action.payload.amount,
        isExpenseAdded: true,
        uiMessage: "Submitted",
      };
    case "ADD_EXPENSES_PENDING":
      return {
        ...state,
        isExpenseAdded: true,
        uiMessage: "Please wait",
      };

    case "ADD_EXPENSES_SUCCESS":
      return {
        ...state,
        isExpenseAdded: true,
        uiMessage: "Please wait",
      };

    case "ADD_EXPENSES_ERROR":
      return {
        ...state,
        isExpenseAdded: false,
        uiMessage: "Something went wrong",
      };

    default:
      const _exhaustive = action;
      return state;
  }
}

export { submitExpensesReducer, submitInitialState };
