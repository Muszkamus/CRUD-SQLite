import { deleteData } from "./jobs";
import { fetchExpenses } from "./fetchExpenses";
import { ExpensesAction } from "../reducer/fetchedExpensesReducer";

export async function handleDelete(
  id: number,
  dispatchFetchedExpenses: React.Dispatch<ExpensesAction>,
): Promise<void> {
  try {
    const response = await deleteData(id);

    if (response.status === 201) {
      fetchExpenses(dispatchFetchedExpenses);
    }
  } catch (error) {
    console.error("Failed to delete expense:", error);
  }
}
