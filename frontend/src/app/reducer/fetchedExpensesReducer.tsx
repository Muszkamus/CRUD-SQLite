// This reducer is stricly used to control the stages to fetch, edit or delete retrieved expenses

export type FetchedExpense = {
  id: number;
  date: string;
  category: string;
  method: string;
  description: string;
  amount: number;
};

// Fetched expenses
export type FetchedExpensesState = {
  expenses: FetchedExpense[];
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
};

const expensesInitialState: FetchedExpensesState = {
  expenses: [],
  status: "idle",
  error: "",
};

export type ExpensesAction =
  | {
      type: "FETCHED_EXPENSES_SUCCESS";
      payload: { expenses: FetchedExpense[] };
    }
  | { type: "FETCHED_EXPENSES_PENDING" }
  | { type: "FETCHED_EXPENSES_ERROR"; payload: { error: any } };

// | { type: "DELETE_EXPENSE_SUCCESS" };

//   | { type: "DELETE_EXPENSE_ERROR" };
function expensesReducer(
  state: FetchedExpensesState,
  action: ExpensesAction,
): FetchedExpensesState {
  switch (action.type) {
    case "FETCHED_EXPENSES_SUCCESS":
      return { ...state, expenses: action.payload.expenses, status: "success" };
    case "FETCHED_EXPENSES_PENDING":
      return { ...state, status: "loading" };
    case "FETCHED_EXPENSES_ERROR":
      return { ...state, error: action.payload.error, status: "error" };
    // case "DELETE_EXPENSE_SUCCESS":
    //   return {
    //     ...state,
    //   };
    // case "DELETE_EXPENSE_ERROR":
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
}

export { expensesReducer, expensesInitialState };
