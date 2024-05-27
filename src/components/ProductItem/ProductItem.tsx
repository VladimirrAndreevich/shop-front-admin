import { I_ProductCard } from "@/types";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import colors from "@/consts/colors";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import EditProductBtn from "../EditProductBtn/EditProductBtn";

interface I_ProductItemProps {
  data: I_ProductCard;
}

const deleteItem = async (productId: number) => {
  await axios.delete(`${process.env.API_URL_BACKEND}/products/${productId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

const ProductItem: React.FC<I_ProductItemProps> = ({ data }) => {
  const { id, title, price, priceDiscounted, mainImage } = data;
  const queryClient = useQueryClient();

  return (
    <Card elevation={0}>
      <CardMedia
        sx={{
          height: "280px",
          backgroundSize: "contain",
        }}
        image={`${process.env.API_URL_IMAGES}/${mainImage}`}
        title={`Image of ${title}`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="p"
          sx={{
            fontSize: { xs: "18px", sm: "26px" },
            color: colors.primary,
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <Stack direction="row" spacing="10px" alignItems="center">
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", sm: "20px", md: "24px" },
            }}
          >
            {priceDiscounted ? priceDiscounted : price} €
          </Typography>
          {priceDiscounted && (
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "12px", sm: "12px", md: "18px" },
                color: "#7B7B7B",
                textDecoration: "line-through",
              }}
            >
              {price} €
            </Typography>
          )}
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <EditProductBtn dataProduct={data} />
        <DeleteBtn
          deleteHandler={async () => {
            await deleteItem(id);
            queryClient.invalidateQueries({ queryKey: ["products"] });
          }}
        />
      </CardActions>
    </Card>
  );
};

export default ProductItem;
