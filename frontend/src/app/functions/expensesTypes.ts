export type Expense = {
  id: number;
  date: string;
  category: string;
  method: string;
  description: string;
  amount: number;
};

export type NewExpense = {
  date: string;
  category: string;
  method: string;
  description: string;
  amount: number;
};
