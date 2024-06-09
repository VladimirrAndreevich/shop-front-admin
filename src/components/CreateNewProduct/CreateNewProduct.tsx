import { useState } from "react";
import Btn from "../Btn/Btn";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

const CreateNewProduct: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [isFeatured, setIsFeatured] = useState(false);
  const queryClient = useQueryClient();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFeatured(event.target.checked);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setImages((prevImages) => [...prevImages, ...selectedFiles]);
    }
  };

  const handleCreateProduct = async (formData: FormData) => {
    const priceDiscounted = formData.get("priceDiscounted") as string;
    formData.append("isFavorite", isFeatured.toString());

    // Remove priceDiscounted if it is not provided
    if (!priceDiscounted) {
      formData.delete("priceDiscounted");
    }

    images.forEach((image) => {
      formData.append("images", image);
    });

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    try {
      const response = await axios.post(
        `${process.env.API_URL_BACKEND}/products/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error creating product:", error);
    }
    queryClient.invalidateQueries({ queryKey: ["products"] });
  };

  return (
    <div>
      <Btn sx={{ mt: 2 }} clickHandler={handleClickOpen}>
        Add new product
      </Btn>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            await handleCreateProduct(new FormData(event.currentTarget));
            handleClose();
          },
        }}
      >
        <DialogTitle>Create new product</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill the fields below</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            required
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            required
            margin="dense"
            id="price"
            name="price"
            label="Price"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            margin="dense"
            id="priceDiscounted"
            name="priceDiscounted"
            label="Price discount"
            type="text"
            fullWidth
            variant="filled"
            helperText="Enter the price with the discount applied."
          />
          <TextField
            required
            id="choice-type"
            margin="dense"
            select
            name="type"
            label="Select type"
            fullWidth
            defaultValue="sneakers"
            variant="filled"
          >
            {["sneakers", "boots", "slippers"].map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            margin="dense"
            id="color"
            name="color"
            label="Color"
            type="text"
            fullWidth
            variant="filled"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isFeatured}
                onChange={handleCheckboxChange}
                name="isFeatured"
                color="primary"
              />
            }
            label="Is Featured"
            sx={{ mt: 2, width: "100%" }}
          />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            type="file"
            multiple
            onChange={handleImageChange}
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span" sx={{ mt: 2 }}>
              Upload Images
            </Button>
          </label>
          {images.length > 0 && (
            <Box mt={1}>
              <h4>Selected Images:</h4>
              <ul>
                {images.map((image, index) => (
                  <li key={index}>{image.name}</li>
                ))}
              </ul>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateNewProduct;
