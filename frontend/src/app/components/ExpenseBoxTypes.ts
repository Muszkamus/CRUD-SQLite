export type AddExpenseBoxType = {
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
  // isDisabled: boolean;
  // deleteTable: React.MouseEventHandler<HTMLButtonElement>;
};
