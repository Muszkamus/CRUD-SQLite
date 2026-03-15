export const dataURL = "http://localhost:8080";

import { AddDataResponse, AddDataTypes, deleteDataResponse } from "./jobsTypes";

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

async function addData(data: AddDataTypes): Promise<AddDataResponse> {
  try {
    const response = await fetch(`${dataURL}/addData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const status = response.status;

    if (!response.ok) {
      throw new Error(`Response status: ${status}`);
    }

    const result = await response.json();

    return {
      status,
      data: result,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteData(id: number): Promise<deleteDataResponse> {
  try {
    const response = await fetch(`${dataURL}/deleteData`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const status = response.status;

    if (!response.ok) {
      throw new Error(`Response status: ${status}`);
    }

    const result = await response.json();

    return {
      status,
      data: result,
    };
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
