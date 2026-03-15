export type Expense = {
  id: number;
  date: string;
  category: string;
  method: string;
  description: string;
  amount: number;
};
export type State = {
  expenses: Expense[];
  date: string;
  category: string;
  method: string;
  description: string;
  amount: string;
  isExpenseAdded: boolean;
};

export type Action = {
  type: "RESET";
};
