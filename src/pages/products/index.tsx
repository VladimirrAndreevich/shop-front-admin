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
      <main>Products</main>
    </>
  );
};

export default ProductsPage;
