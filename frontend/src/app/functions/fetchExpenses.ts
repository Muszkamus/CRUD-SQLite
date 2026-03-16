import { ExpensesAction } from "../reducer/expensesReducer";
import { dataURL } from "./jobs";

export async function fetchExpenses(dispatch: React.Dispatch<ExpensesAction>) {
  try {
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
    console.error(err);
  }
}
