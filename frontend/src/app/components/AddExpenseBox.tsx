import { categoryData, methodData } from "../data/data";

type AddExpenseBox = {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  method: string;
  setMethod: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  addExpense: React.MouseEventHandler<HTMLButtonElement>;
  isExpenseAdded: boolean;
  addTable: React.MouseEventHandler<HTMLButtonElement>;
  // deleteTable: React.MouseEventHandler<HTMLButtonElement>;
};

export default function AddExpenseBox({
  date,
  setDate,
  category,
  setCategory,
  method,
  setMethod,
  description,
  setDescription,
  amount,
  setAmount,
  addExpense,
  isExpenseAdded,
  addTable,
  // deleteTable,
}: AddExpenseBox) {
  return (
    <div className="addExpenseBox">
      <div>
        <p>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </p>
      </div>

      <div>
        <p>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- select a category --</option>

            {categoryData.map((data) => (
              <option value={data.category} key={data.id}>
                {data.category}
              </option>
            ))}
          </select>
        </p>
      </div>

      <div>
        <p>
          Method:
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="">-- select a method --</option>
            {methodData.map((data) => (
              <option value={data.method} key={data.id}>
                {data.method}
              </option>
            ))}
          </select>
        </p>
      </div>
      <div>
        <p>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
      </div>

      <div>
        <p>
          Amount:
          <input
            type="text"
            inputMode="decimal"
            pattern="^\d+(\.\d{0,2})?$"
            placeholder="0.00"
            value={amount}
            onChange={(e) => {
              // Fix the issue with convertin it into a number
              const value = e.target.value;
              // Allow only numbers and max 2 decimal points
              if (/^\d*(\.\d{0,2})?$/.test(value)) setAmount(value);
            }}
          />
        </p>
      </div>

      <div>
        <button className="button" onClick={addTable}>
          Open
        </button>
        {/* <button className="button" onClick={deleteTable}>
          Close
        </button> */}
        <button className="button" onClick={addExpense}>
          Add
        </button>
      </div>

      <div className="expenseSubmitted">
        <p>{isExpenseAdded ? "Expense Submitted!" : ""}</p>
      </div>
    </div>
  );
}
