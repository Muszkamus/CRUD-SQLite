export const dataURL = "http://localhost:8080";

async function retrieveData() {
  try {
    const response = await fetch(`${dataURL}/retrieveTable`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

type AddDataTypes = {
  date: string;
  category: string;
  method: string;
  description: string;
  amount: number;
};
async function addData(data: AddDataTypes): Promise<void> {
  try {
    const response = await fetch(`${dataURL}/addData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    await response.text();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteData(id: number): Promise<number> {
  console.log(id);
  try {
    const response = await fetch(`${dataURL}/deleteData`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`HTTP ${response.status}: ${text}`);
    }

    const result: number = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
async function deleteTable() {
  try {
    const response = await fetch(`${dataURL}/deleteTable`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function addTable() {
  try {
    const response = await fetch(`${dataURL}/addTable`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export { retrieveData, addData, deleteTable, deleteData, addTable };
