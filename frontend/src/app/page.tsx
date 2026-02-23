"use client";

const url = "http://localhost:8080";

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
async function deleteData() {
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

const Page = () => {
  return (
    <div>
      <input></input>

      <button onClick={() => addData()}>Add me</button>
      <button onClick={() => deleteData()}>Delete me</button>
    </div>
  );
};

export default Page;
