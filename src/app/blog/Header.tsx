"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6">寿の店ブログ</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
