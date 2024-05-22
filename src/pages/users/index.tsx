import MainContainer from "@/components/MainContainer/MainContainer";
import { Grid } from "@mui/material";
import AsideMenu from "@/components/AsideMenu/AsideMenu";

import { observer } from "mobx-react-lite";
import AuthGuard from "@/features/AuthGuard";
import Head from "next/head";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import OrderList from "@/components/OrderList/OrderList";

const UsersPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Products Control</title>
        <meta name="description" content="Page for product's control" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/admin-favicon.svg" />
      </Head>
      <div>
        <SectionTitle>Users orders</SectionTitle>
        <OrderList />
      </div>
    </>
  );
};

export default UsersPage;
