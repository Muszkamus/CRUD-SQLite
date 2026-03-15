import { Action, State, Expense } from "./expensesReducerTypes";

const initialState: State = {
  expenses: [],
  date: "",
  category: "",
  method: "",
  description: "",
  amount: "",
  isExpenseAdded: false,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "RESET":
      return initialState;

    // AddExpense
    // DeleteExpense
    // RetrieveExpenses
    // UpdateExpenses
    // CreateTable
    // DeleteTable
    // Error

    default:
      const _exhaustive = action;
      return state;
  }
}

export { reducer, initialState };
