export type Expense = {
  id: number;
  date: string;
  category: string;
  method: string;
  description: string;
  amount: number;
};
export type State = {
  date: string;
  category: string;
  method: string;
  description: string;
  amount: string;
  isExpenseAdded: boolean;
  uiMessage: string;
  error: string;
};

export type Action =
  | { type: "RESET" }
  | {
      type: "ADD_EXPENSES_SUBMIT";
      payload: {
        date: string;
        category: string;
        method: string;
        description: string;
        amount: string;
      };
    }
  | {
      type: "ADD_EXPENSES_PENDING";
    }
  | {
      type: "ADD_EXPENSES_SUCCESS";
    }
  | {
      type: "ADD_EXPENSES_ERROR";
      payload: { error: any };
    };
