type ExpenseHistoryLog = {
  deleteData: (id: number) => Promise<number>;
  expenses: any;
  setExpenses: any;
};

export default function ExpenseHistoryLog({
  deleteData,
  expenses,
  setExpenses,
}: ExpenseHistoryLog) {
  function handleDelete(id: number) {
    // if deleteData(id) was successfull on the backend >>>
    deleteData(id);

    // Send responses from backend when successful and based on the response, refetch
    // Update the UI by refetching
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
            <button onClick={() => handleDelete(expense.id)}>❌</button>
          </div>
        </div>
      ))}
    </>
  );
}
