export type SubmitExpenseType = {
  date: string;
  category: string;
  method: string;
  description: string;
  amount: number;
  isExpenseAdded: boolean;
  status: "pending" | "idle" | "error" | "success";
  error: string;
  isButtonDisabled: boolean;
};

export type SubmitAction =
  | { type: "RESET" }
  | {
      type: "ADD_EXPENSES_SUBMIT";
      payload: {
        date: string;
        category: string;
        method: string;
        description: string;
        amount: number;
      };
    }
  | {
      type: "ADD_EXPENSES_SUCCESS";
    }
  | {
      type: "ADD_EXPENSES_ERROR";
      payload: { error: any };
    };
