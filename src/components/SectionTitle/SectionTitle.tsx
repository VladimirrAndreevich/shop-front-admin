import { Typography } from "@mui/material";
import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <Typography variant="h2" fontSize={40}>
      {children}
    </Typography>
  );
};

export default SectionTitle;
