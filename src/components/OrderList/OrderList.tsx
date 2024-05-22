import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { I_OrderRes } from "@/types";
import { useQuery } from "@tanstack/react-query";
import OrderItem from "../OrderItem/OrderItem";
import Delivery from "../Delivery/Delivery";

const fetchOrders = (): Promise<I_OrderRes> =>
  axios
    .post(
      `${process.env.API_URL_BACKEND}/users/orders/admin`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((response) => response.data);

const OrderList: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching of orders</div>;
  }

  if (!data?.orders || data.orders.length === 0) {
    return <div>Empty</div>;
  }

  // console.log(data.orders);
  const { orders } = data;

  return (
    <Box mt={4}>
      {orders.map((order) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Grid container fontWeight="bold">
              <Grid xs={4} item>
                Order #{order.id}
              </Grid>
              <Grid xs={4} item>
                User #{order.user.id}
              </Grid>
              <Grid xs={4} item>
                {order.user.email}
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <OrderItem orderData={order} />
            <Delivery orderData={order} />
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default OrderList;
