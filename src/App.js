import { Button, Card, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Name from "./Name";
import Counter from "./Counter";

const App = () => {
  const isName = useSelector((state) => state.name.name);
  console.log(isName);
  return <div>{isName ? <Counter /> : <Name />}</div>;
};

export default App;
