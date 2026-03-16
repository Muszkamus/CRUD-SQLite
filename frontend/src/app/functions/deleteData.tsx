import { deleteData } from "./jobs";
import { fetchExpenses } from "./fetchExpenses";
import { Action } from "../reducer/expensesReducerTypes";

type handleDelete = (
  id: number,
  dispatch: React.Dispatch<Action>,
) => Promise<void>;

export async function handleDelete(
  id: number,
  dispatch: React.Dispatch<Action>,
) {
  try {
    const response = await deleteData(id);

    if (response.status === 201) {
      fetchExpenses(dispatch);
    }
  } catch (error) {
    console.error("Failed to delete expense:", error);
  }
}
