import { I_Order } from "@/types";
import { Box, Stack, Typography } from "@mui/material";

type DeliveryProps = {
  orderData: I_Order;
};

const Delivery: React.FC<DeliveryProps> = ({ orderData }) => {
  return (
    <Box sx={{ mt: "30px", border: "1px solid #E9EAEE", borderRadius: "5px" }}>
      <Box
        sx={{
          display: "block",
          ml: "auto",
          backgroundColor: "#F8F8F8",
          border: "1px solid #E9EAEE",
          p: "14px",
          fontWeight: "bold",
        }}
      >
        Delivery address
      </Box>

      <Stack sx={{ p: "14px" }}>
        <Typography fontWeight="bold">
          {orderData.nameFirst} {orderData.nameSecond}
        </Typography>
        <Typography color="#87878D" mt={1}>
          Country
        </Typography>
        <Typography>{orderData.country}</Typography>
        <Typography color="#87878D" mt={1}>
          Address
        </Typography>
        <Typography>{orderData.address}</Typography>
        <Typography color="#87878D" mt={1}>
          Phone number
        </Typography>
        <Typography>{orderData.phoneNumber}</Typography>
        <Typography color="#87878D" mt={1}>
          Postal Code
        </Typography>
        <Typography>{orderData.postalCode}</Typography>
        <Typography color="#87878D" mt={1}>
          Email
        </Typography>
        <Typography>{orderData.user.email}</Typography>
      </Stack>
    </Box>
  );
};

export default Delivery;
