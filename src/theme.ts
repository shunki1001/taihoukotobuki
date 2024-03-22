// src/theme.ts
"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const fontFamily = [
  "Noto Sans JP",
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
].join(",");

const theme = createTheme({
  palette: {
    primary: {
      main: "#a74535",
    },
  },
  typography: {
    fontFamily: fontFamily,
  },
});

export default theme;
