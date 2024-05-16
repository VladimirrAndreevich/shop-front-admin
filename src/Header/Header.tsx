import MainContainer from "@/components/MainContainer/MainContainer";
import colors from "@/consts/colors";
import { Box, styled } from "@mui/material";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <MainContainer sx={{ display: "flex", justifyContent: "center" }}>
        <Image
          src="/icons/logo.svg"
          alt="Shop Logo"
          width={70}
          height={27}
          priority
        />
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
