import { Button, Card, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { enterName } from "./reducer/UserNameSlice";

const Name = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(enterName(name));
  };
  return (
    <div className="flex  justify-center items-center min-h-screen">
      <Card className="flex flex-col justify-center items-center p-10 gap-4">
        <h1 className="font-semibold text-lg">Select counter name</h1>
        <TextField
          label="Name"
          value={name}
          onChange={handleChange}
          placeholder="Enter Your Name"
        />
        <Button variant="contained" onClick={handleClick}>
          Continue
        </Button>
      </Card>
    </div>
  );
};

export default Name;
