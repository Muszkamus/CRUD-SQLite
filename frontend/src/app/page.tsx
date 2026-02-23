"use client";

import Button from "./components/Button";

const url = "http://localhost:8080";

async function retrieveData() {
  try {
    const response = await fetch(`${url}/get`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function addData() {
  try {
    const response = await fetch(`${url}/add`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
async function deleteTable() {
  try {
    const response = await fetch(`${url}/deleteTable`);
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
    const response = await fetch(`${url}/addTable`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

const Page = () => {
  return (
    <div>
      <input></input>

      <Button>Add Table</Button>
      <button onClick={() => addTable()}> Add Table</button>
      <button onClick={() => retrieveData()}> Retrieve Data</button>
      <button onClick={() => addData()}>Add me</button>
      <button onClick={() => deleteTable()}>Delete Table</button>
    </div>
  );
};

export default Page;
