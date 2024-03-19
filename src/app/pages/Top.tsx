import { Box, Container, Grid } from "@mui/material";
import * as React from "react";
import Image from "next/image";
import top_view from "../../../public/img/DSC00167.jpg";

const Top = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Box sx={{ width: "100vw", position: "fixed", zIndex: "-10" }}>
        <Image src={top_view} layout="responsive" alt="top view" />
      </Box>
    </Container>
  );
};

export default Top;
