// This reducer is stricly used to fetch, edit or delete retrieved expenses

type Expense = {
  id: number;
  date: string;
  category: string;
  method: string;
  description: string;
  amount: number;
};

// Fetched expenses
type ExpensesState = {
  expenses: Expense[];
};

const expensesInitialState: ExpensesState = {
  expenses: [],
};

export type ExpensesAction = {
  type: "FETCHED_EXPENSES_SUCCESS";
  payload: { expenses: Expense[] };
};

function expensesReducer(
  state: ExpensesState,
  action: ExpensesAction,
): ExpensesState {
  switch (action.type) {
    case "FETCHED_EXPENSES_SUCCESS":
      return { ...state, expenses: action.payload.expenses };
    default:
      return state;
  }
}

export { expensesReducer, expensesInitialState };
