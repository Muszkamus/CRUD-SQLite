import { Expense } from "../functions/expensesTypes";
import {
  ExpensesAction,
  FetchedExpensesState,
} from "../reducer/fetchedExpensesReducer";

import "../styles/expenseRow.css";

type FetchedExpensesProps = {
  handleDelete: any;
  dispatchFetchedExpenses: React.Dispatch<ExpensesAction>;
  stateFetchedExpenses: FetchedExpensesState;
};

export default function FetchedExpenses({
  stateFetchedExpenses,
  handleDelete,
  dispatchFetchedExpenses,
}: FetchedExpensesProps) {
  return (
    <div>
      {stateFetchedExpenses.expenses.map((expense: Expense) => (
        <div className="existingExpense" key={expense.id}>
          <div className="cell">
            <p>{expense.date}</p>
          </div>
          <div className="cell">
            <p>{expense.category}</p>
          </div>
          <div className="cell">
            <p>{expense.method}</p>
          </div>
          <div className="cell">
            <p>{expense.description}</p>
          </div>
          <div className="cell">
            <p>£{expense.amount}</p>
          </div>

          <div className="cell">
            <button onClick={() => console.log("Edited")}>✏️</button>
          </div>
          <div className="cell">
            <button
              onClick={() => handleDelete(expense.id, dispatchFetchedExpenses)}
            >
              ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
