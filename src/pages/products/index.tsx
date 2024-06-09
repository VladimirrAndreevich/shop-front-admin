import Btn from "@/components/Btn/Btn";
import CreateNewProduct from "@/components/CreateNewProduct/CreateNewProduct";
import ProductsList from "@/components/ProductsList/ProductsList";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Button } from "@mui/material";
import Head from "next/head";

const ProductsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Products Control</title>
        <meta name="description" content="Page for product's control" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/admin-favicon.svg" />
      </Head>
      <div>
        <SectionTitle>Products</SectionTitle>
        <CreateNewProduct />
        <ProductsList />
      </div>
    </>
  );
};

export default ProductsPage;
