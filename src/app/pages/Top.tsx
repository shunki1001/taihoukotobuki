import React from "react";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import top_view from "../../../public/img/DSC00179.jpg";

const Top = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: "-10",
        }}
      >
        <Image src={top_view} fill objectFit="cover" alt="top view" />
      </Box>
    </Container>
  );
};

export default Top;
