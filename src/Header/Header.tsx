import MainContainer from "@/components/MainContainer/MainContainer";
import colors from "@/consts/colors";
import { getStoreInstance } from "@/store/userStore";
import { Box, Typography, styled } from "@mui/material";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <MainContainer
        sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
      >
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="Shop Logo"
            width={70}
            height={27}
            priority
          />
        </Link>
        <Heading variant="h2">Admin</Heading>
      </MainContainer>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled(Box)(() => ({
  paddingTop: "26px",
  paddingBottom: "36px",

  backgroundColor: colors.primary,
}));

const Heading = styled(Typography)(() => ({
  fontSize: "30px",
  color: "white",
  fontStyle: "italic",
}));
