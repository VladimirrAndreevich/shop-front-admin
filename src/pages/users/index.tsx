import MainContainer from "@/components/MainContainer/MainContainer";
import { Grid } from "@mui/material";
import AsideMenu from "@/components/AsideMenu/AsideMenu";

import { observer } from "mobx-react-lite";
import AuthGuard from "@/features/AuthGuard";
import Head from "next/head";

const UsersPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Products Control</title>
        <meta name="description" content="Page for product's control" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/admin-favicon.svg" />
      </Head>
      <main>Users</main>
    </>
  );
};

export default UsersPage;
