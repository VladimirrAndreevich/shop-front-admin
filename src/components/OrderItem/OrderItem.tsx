import { E_OrderStatus, I_Order } from "@/types";
import {
  Box,
  Divider,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

type OrderItemProps = {
  orderData: I_Order;
};

const OrderItem: React.FC<OrderItemProps> = ({ orderData }) => {
  const [status, setStatus] = useState(orderData.status.toString());
  const [isLoadingStatus, setIsLoadingStatus] = useState(false);

  const handleChange = async (event: SelectChangeEvent) => {
    setIsLoadingStatus(true);
    setStatus(event.target.value);

    await axios
      .post(
        `${process.env.API_URL_BACKEND}/users/orders/admin/update`,
        { orderId: orderData.id, newStatus: event.target.value },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => response.data);

    setIsLoadingStatus(false);
  };
  const createdAt = new Date(orderData.createdAt);
  if (isNaN(createdAt.getTime())) {
    throw new Error("Invalid date format for createdAt");
  }
  const date = `${createdAt.getDate()}.${
    createdAt.getMonth() + 1
  }.${createdAt.getFullYear()}`;

  const totalPrice = orderData.cart.reduce((accumulator, currentValue) => {
    return +accumulator + +currentValue.price;
  }, 0);

  const totalDiscount = orderData.cart.reduce((accumulator, currentValue) => {
    if (currentValue.discount) {
      console.log(currentValue.discount);
      return +accumulator + +currentValue.discount;
    } else {
      return +accumulator;
    }
  }, 0);
  let subtotal = totalPrice;
  if (totalDiscount && subtotal) {
    subtotal += totalDiscount;
  }

  return (
    <Box
      sx={{
        border: "1px solid #E9EAEE",
        borderRadius: "5px",
        p: "25px",
      }}
    >
      {/* <Typography fontWeight="bold">Order #{orderData.id}</Typography> */}
      <Typography color="#646464">The order was placed {date}</Typography>
      <Select
        disabled={isLoadingStatus}
        value={status}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          color: "#09B11B",
          border: "1px solid #F4F4F4",
          mt: 1,
        }}
      >
        <MenuItem value={E_OrderStatus.created}>created</MenuItem>
        <MenuItem value={E_OrderStatus.confirmed}>confirmed</MenuItem>
        <MenuItem value={E_OrderStatus.declined}>declined</MenuItem>
      </Select>

      <Grid container mt={2} fontWeight="bold">
        <Grid xs={9} item>
          Product
        </Grid>
        <Grid xs={3} item>
          Price
        </Grid>
      </Grid>

      {orderData.cart.map((order) => (
        <>
          <Divider sx={{ backgroundColor: "#cacdd8", my: 2 }} />
          <Grid container>
            <Grid xs={9} item>
              {order.title}
            </Grid>
            <Grid xs={3} item>
              {order.price}
            </Grid>
          </Grid>
        </>
      ))}

      <Divider sx={{ backgroundColor: "#cacdd8", my: 2 }} />
      <Grid container mt={2} fontWeight="bold">
        <Grid xs={9} item>
          Subtotal
        </Grid>
        <Grid xs={3} item>
          {subtotal}
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: "#cacdd8", my: 2 }} />
      <Grid container mt={2} fontWeight="bold">
        <Grid xs={9} item>
          Discount
        </Grid>
        <Grid xs={3} item>
          {totalDiscount}
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: "#cacdd8", my: 2 }} />
      <Grid container mt={2} fontWeight="bold">
        <Grid xs={9} item>
          Total
        </Grid>
        <Grid xs={3} item>
          {totalPrice}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderItem;
