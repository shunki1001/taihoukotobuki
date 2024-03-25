import React from "react";
import { Box, Container, Divider, Grid, Icon, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import logo from "../../../public/img/logo.png";
import Image from "next/image";

const Contact = () => {
  return (
    <Box
      sx={{
        pt: { xs: 2, sm: 4 },
        pb: { xs: 2, sm: 4 },
        background: "rgba(240,240,240,1)",
        textAlign: "center",
      }}
      id="contact"
    >
      <Container>
        <Image
          src={logo}
          height={100}
          width={100}
          alt="top view"
          style={{ margin: "2em 0" }}
        />
        <Box>SNSで最新の情報を発信しています！</Box>
        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ justifyContent: "center" }}
        >
          <FacebookIcon color="primary" fontSize="large" />
          <InstagramIcon color="primary" fontSize="large" />
        </Stack>
        <p style={{ marginTop: "2em", fontSize: "small" }}>2024 大宝寿</p>
      </Container>
    </Box>
  );
};

export default Contact;
