type ExpenseHistoryLog = {
  handleDelete: (id: number) => Promise<void>;
  expenses: any[];
  setExpenses: React.Dispatch<React.SetStateAction<any[]>>;
};

export default function ExpenseHistoryLog({
  handleDelete,
  expenses,
  // setExpenses,
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
            <button onClick={() => handleDelete(expense.id)}>❌</button>
          </div>
        </div>
      ))}
    </>
  );
}
