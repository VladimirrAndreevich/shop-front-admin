import { I_ProductsRes } from "@/types";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem";

const fetchGroups = (): Promise<I_ProductsRes> =>
  axios
    .get(`${process.env.API_URL_BACKEND}/products`)
    .then((response) => response.data);

const ProductsList: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchGroups,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching of products</div>;
  }
  if (!data?.data || data.data.length === 0) {
    return <div>Empty</div>;
  }

  return (
    <Grid container spacing={2}>
      {data.data?.map((item) => (
        <Grid item xs={4}>
          <ProductItem data={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
