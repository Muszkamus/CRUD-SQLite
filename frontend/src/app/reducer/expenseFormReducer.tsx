// This reducer is strictly to be used to submit new expense to the database

import { SubmitAction, SubmitExpenseType } from "./expenseFormReducerTypes";

const submitInitialState: SubmitExpenseType = {
  date: "",
  category: "",
  method: "",
  description: "",
  amount: 0,
  isExpenseAdded: false,
  status: "idle",
  error: "",
  isButtonDisabled: false,
};

function submitExpensesReducer(
  state: SubmitExpenseType,
  action: SubmitAction,
): SubmitExpenseType {
  switch (action.type) {
    case "RESET":
      return submitInitialState;
    case "ADD_EXPENSES_SUBMIT":
      return {
        ...state,
        isExpenseAdded: true,
        isButtonDisabled: true,
        status: "pending",
      };
    case "ADD_EXPENSES_SUCCESS":
      return {
        ...state,
        isExpenseAdded: true,
        isButtonDisabled: false,
        status: "success",
      };

    case "ADD_EXPENSES_ERROR":
      return {
        ...state,
        isExpenseAdded: false,
        error: action.payload.error,
        isButtonDisabled: false,
        status: "error",
      };

    default:
      const _exhaustive = action;
      return state;
  }
}

export { submitExpensesReducer, submitInitialState };
