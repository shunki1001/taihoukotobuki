"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/img/logo.png";

const Header = () => {
  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Image src={logo} alt="寿の店" width={40} height={40} />
            <Typography variant="h6">寿の店ブログ</Typography>
          </Stack>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
