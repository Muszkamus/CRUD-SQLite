import { FetchedExpensesState } from "../reducer/fetchedExpensesReducer";
import Spinner from "./Spinner";

import "../styles/expenseRow.css";

type ExpenseHistoryLogProps = {
  stateFetchedExpenses: FetchedExpensesState;
  children: React.ReactNode;
};

export default function ExpenseHistoryLog({
  stateFetchedExpenses,
  children,
}: ExpenseHistoryLogProps) {
  return (
    <div>
      {stateFetchedExpenses.status === "success" && children}

      <div className="expensesEdgeCase">
        {/* {stateFetchedExpenses.status === "success" && <Spinner />} */}

        {stateFetchedExpenses.status === "success" &&
        stateFetchedExpenses.expenses.length === 0 ? (
          <p>Empty! No expenses in the log 😊</p>
        ) : (
          ""
        )}
        {stateFetchedExpenses.status === "loading" && <Spinner />}
        {stateFetchedExpenses.status === "error" && (
          <p>Error fetching expenses</p>
        )}
      </div>
    </div>
  );
}
