import { ExpensesAction } from "../reducer/fetchedExpensesReducer";
import { dataURL } from "./jobs";

export async function fetchExpenses(dispatch: React.Dispatch<ExpensesAction>) {
  try {
    dispatch({ type: "FETCHED_EXPENSES_PENDING" });
    const response = await fetch(`${dataURL}/retrieveTable`);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();

    dispatch({
      type: "FETCHED_EXPENSES_SUCCESS",
      payload: { expenses: data },
    });
  } catch (err) {
    dispatch({ type: "FETCHED_EXPENSES_ERROR", payload: { error: err } });
  }
}
