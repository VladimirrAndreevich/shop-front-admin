import Image from "next/image";
import MainContainer from "../MainContainer/MainContainer";
import colors from "@/consts/colors";
import { Box, styled } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <FooterStyled component="footer">
      <MainContainer sx={{ display: "flex", justifyContent: "center" }}>
        <Image
          src="/icons/logo_gray.svg"
          alt="Shop Logo"
          width={70}
          height={27}
          priority
        />
      </MainContainer>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled(Box)(() => ({
  paddingTop: "26px",
  paddingBottom: "36px",

  backgroundColor: colors.primary,
}));
