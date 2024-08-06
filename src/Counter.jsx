import { Box, Button, Card } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./reducer/CounterSlice";
import Options from "./Options";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.name.name);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <>
      <Options />
      <Box className="flex justify-center items-center min-h-screen">
        <Card
          variant="elevation"
          className="flex flex-col justify-center items-center p-10"
        >
          <h1 className="text-2xl font-semibold p-5">{name}</h1>
          <Box className="flex flex-row justify-center items-center gap-10 m-5">
            <Button variant="contained" onClick={handleDecrement}>
              -
            </Button>
            <h1 className="text-2xl">{counter}</h1>
            <Button variant="contained" onClick={handleIncrement}>
              +
            </Button>
          </Box>
          <Button variant="outlined" sx={{ margin: 2 }} onClick={handleReset}>
            Reset
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default Counter;
