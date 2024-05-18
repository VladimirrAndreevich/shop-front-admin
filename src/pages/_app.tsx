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

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  if (router.asPath === "/login") {
    return (
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <AuthGuard>
          <MainContainer sx={{ py: 5, minHeight: "calc(100vh - 187px)" }}>
            <Grid container>
              <Grid item xs={3}>
                <AsideMenu />
              </Grid>
              <Grid item xs={9}>
                <Component {...pageProps} />
              </Grid>
            </Grid>
          </MainContainer>
        </AuthGuard>
        <Footer />
      </>
    );
  }

  // return (
  //   <>
  //     <Header />
  //     <Component {...pageProps} />
  //     <Footer />
  //   </>
  // );
};

export default observer(App);
