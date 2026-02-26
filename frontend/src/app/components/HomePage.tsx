"use client";

import Button from "./Button";
import "../styles/table.css";
import "../styles/homepage.css";

import {
  addTable,
  retrieveData,
  addData,
  deleteTable,
} from "../functions/jobs";
import Input from "./Input";
import { useState } from "react";

const HomePage = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | "">("");

  const handleAddData = () => {
    if (!name || age === "") return;
    // addData( name, age });
  };
  return (
    <div className="main">
      <div className="buttons">
        <Button submitRequest={addTable}>Add Table</Button>
        <Button submitRequest={retrieveData}>Retrieve Data</Button>
        <Button
          // name={name}
          // age={age}
          submitRequest={addData}
        >
          Add Data
        </Button>
        <Button submitRequest={deleteTable}>Delete Table</Button>
      </div>
      <div className="inputDiv">
        <Input state={name} setState={setName}>
          Name
        </Input>
        <Input state={age} setState={setAge}>
          Age
        </Input>
      </div>

      <div className="table">TABLE</div>
    </div>
  );
};

export default HomePage;
