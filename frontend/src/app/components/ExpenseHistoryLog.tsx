export default function ExpenseHistoryLog({
  expenses,
  setExpenses,
  selectedExpense,
}: any) {
  function handleDelete(id: any) {
    setExpenses(expenses.filter((e: any) => e.id !== id));
  }
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
            <button
              value={selectedExpense}
              onClick={() => handleDelete(expense.id)}
            >
              ❌
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
