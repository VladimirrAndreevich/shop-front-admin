import MainContainer from "@/components/MainContainer/MainContainer";
import {
  Divider,
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
  styled,
} from "@mui/material";
import Head from "next/head";
import AsideMenu from "@/components/AsideMenu/AsideMenu";
import LoginForm from "@/components/LoginForm/LoginForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login to admin</title>
        <meta
          name="description"
          content="The page for login to the admin dashboard"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/admin-favicon.svg" />
      </Head>
      <main>
        <MainContainer sx={{ py: 5 }} maxWidth="sm">
          <Heading>Login</Heading>
          <LoginForm />
        </MainContainer>
      </main>
    </>
  );
}

const Heading = styled(Typography)(() => ({
  fontSize: "30px",
  marginBottom: "15px",
}));
