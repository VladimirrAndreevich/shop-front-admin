import MainContainer from "@/components/MainContainer/MainContainer";
import { Grid } from "@mui/material";
import AsideMenu from "@/components/AsideMenu/AsideMenu";

import { observer } from "mobx-react-lite";
import AuthGuard from "@/features/AuthGuard";
import Head from "next/head";

const ProductsPage: React.FC = () => {
  return <div>Products</div>;
  return (
    <>
      <Head>
        <title>Products Control</title>
        <meta name="description" content="Page for product's control" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/admin-favicon.svg" />
      </Head>
      <main>
        {/* <AuthGuard>
          <MainContainer sx={{ py: 5, minHeight: "calc(100vh - 187px)" }}>
            <Grid container>
              <Grid item xs={3}>
                <AsideMenu />
              </Grid>
              <Grid item xs={9}>
                Products
              </Grid>
            </Grid>
          </MainContainer>
        </AuthGuard> */}
        Products
      </main>
    </>
  );
};

export default ProductsPage;
