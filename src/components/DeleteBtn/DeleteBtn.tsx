import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

type DeleteBtnProps = {
  deleteHandler: () => void;
};

const DeleteBtn: React.FC<DeleteBtnProps> = ({ deleteHandler }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        size="small"
        variant="contained"
        color="error"
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure that you want to delete?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button
            onClick={() => {
              deleteHandler();
              handleClose();
            }}
            variant="contained"
            color="error"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteBtn;
