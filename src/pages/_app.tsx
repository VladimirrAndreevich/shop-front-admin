import Header from "@/Header/Header";
import AsideMenu from "@/components/AsideMenu/AsideMenu";
import Footer from "@/components/Footer/Footer";
import MainContainer from "@/components/MainContainer/MainContainer";
import AuthGuard from "@/features/AuthGuard";
import "@/styles/globals.css";
import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  if (router.asPath === "/") {
    return (
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <Header />
        <AuthGuard>
          <MainContainer sx={{ py: 5, minHeight: "calc(100vh - 187px)" }}>
            <Grid container component="main">
              <Grid item xs={3}>
                <AsideMenu />
              </Grid>
              <Grid item xs={9} p={5}>
                <Component {...pageProps} />
              </Grid>
            </Grid>
          </MainContainer>
        </AuthGuard>
        <Footer />
      </QueryClientProvider>
    );
  }
};

export default observer(App);
