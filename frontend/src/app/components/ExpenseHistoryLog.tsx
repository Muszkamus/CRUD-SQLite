import { Expense } from "../functions/expensesTypes";
import { Action } from "../reducer/expensesReducerTypes";

type ExpenseHistoryLog = {
  handleDelete: any;
  // dispatch: React.Dispatch<Action>) => Promise<void>

  expenses: Expense[];
  // dispatch: React.Dispatch<Action>;
  //setExpenses: React.Dispatch<React.SetStateAction<any[]>>;
};

export default function ExpenseHistoryLog({
  handleDelete,
  expenses,
  // dispatch,
}: ExpenseHistoryLog) {
  return (
    <>
      {expenses.map((expense: any) => (
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
              onClick={() =>
                handleDelete(
                  expense.id,
                  // dispatch
                )
              }
            >
              ❌
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
