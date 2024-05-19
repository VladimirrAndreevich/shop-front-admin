import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContent, DialogContentText, TextField } from "@mui/material";
import axios from "axios";
import { I_ProductCard } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

type EditButtonProps = {
  dataProduct: I_ProductCard;
};

const EditProductBtn: React.FC<EditButtonProps> = ({ dataProduct }) => {
  const { id, title, price, priceDiscounted } = dataProduct;
  const [open, setOpen] = React.useState(false);
  const [titleValue, setTitleValue] = React.useState(dataProduct.title);
  const [priceValue, setPriceValue] = React.useState(dataProduct.price);
  const queryClient = useQueryClient();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editItem = async () => {
    const body = {
      title: titleValue,
      price: priceValue,
    };

    await axios.put(`${process.env.API_URL_BACKEND}/products/${id}`, body);
    handleClose();
    queryClient.invalidateQueries({ queryKey: ["products"] });
  };

  return (
    <React.Fragment>
      <Button size="small" variant="contained" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Editing of the item"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              sx={{ mt: 1 }}
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Price"
              type="number"
              variant="outlined"
              sx={{ mt: 1 }}
              value={priceValue}
              onChange={(e) => setPriceValue(+e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button
            onClick={() => {
              editItem();
            }}
            variant="contained"
            color="warning"
            autoFocus
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default EditProductBtn;
