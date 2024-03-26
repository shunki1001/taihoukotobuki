"use client";
import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Icon,
  IconButton,
  Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import logo from "../../../public/img/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
        <Link href="/">
          <Image
            src={logo}
            height={100}
            width={100}
            alt="top view"
            style={{ margin: "2em 0" }}
          />
        </Link>
        <Box>SNSで最新の情報を発信しています！</Box>
        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ justifyContent: "center" }}
        >
          <IconButton
            onClick={() => {
              window.location.href =
                "https://www.instagram.com/taihoukotobuki/";
            }}
          >
            <FacebookIcon color="primary" fontSize="large" />
          </IconButton>
          <IconButton
            onClick={() => {
              window.location.href =
                "https://www.instagram.com/taihoukotobuki/";
            }}
          >
            <InstagramIcon color="primary" fontSize="large" />
          </IconButton>
        </Stack>
        <p style={{ marginTop: "2em", fontSize: "small" }}>2024 大宝寿</p>
      </Container>
    </Box>
  );
};

export default Footer;
