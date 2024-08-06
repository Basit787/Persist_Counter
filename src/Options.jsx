import { Box, Button, Dialog, DialogContent } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { clearName } from "./reducer/UserNameSlice";
import { resetCounter } from "./reducer/CounterSlice";

const Options = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const handleName = () => {
    dispatch(clearName());
  };

  const handleReset = () => {
    dispatch(clearName());
    dispatch(resetCounter());
  };
  return (
    <div className="absolute right-0 m-4">
      <Button variant="contained" onClick={handleClickOpen}>
        Options
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Box className="flex flex-col gap-3">
            <Button variant="outlined" onClick={handleName}>
              Change Name
            </Button>
            <Button variant="contained" color="error" onClick={handleReset}>
              Reset App
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Options;
