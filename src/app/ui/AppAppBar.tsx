"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import router from "../router/router";
import { RouterInterface } from "../router/router";
import Image from "next/image";

import noren from "../../../public/img/noren.svg";

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <Box sx={{ width: "100vw" }}>
      <Box
        sx={{
          background: "#fffbd4",
          width: "100vw",
          height: "50vh",
          position: "absolute",
          borderRadius: "0px 0px 1vh 1vh",
          zIndex: "-5",
        }}
      ></Box>
      <Toolbar
        variant="regular"
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          borderRadius: "999px",
        })}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "flex-start",
            ml: "-18px",
            px: 0,
          }}
        >
          <p
            style={{
              color: "#a74535",
              paddingLeft: "1em",
              fontWeight: "bold",
              writingMode: "vertical-rl",
            }}
          >
            大宝寿
          </p>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 0.5,
              alignItems: "center",
              flexGrow: 1,
            }}
          ></Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {router.map((item: RouterInterface) => {
              return (
                <MenuItem
                  onClick={() => scrollToSection(item.id)}
                  sx={{ py: "6px", px: "12px", writingMode: "vertical-rl" }}
                  key={item.id}
                >
                  {item.name}
                </MenuItem>
              );
            })}
          </Box>
        </Box>

        <Box sx={{ display: { xs: "", sm: "none" } }}>
          <Button
            variant="text"
            color="primary"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ minWidth: "30px", p: "4px" }}
          >
            <MenuIcon />
          </Button>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                minWidth: "60dvw",
                p: 2,
                backgroundColor: "background.paper",
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  flexGrow: 1,
                }}
              ></Box>
              {router.map((item: RouterInterface) => {
                return (
                  <MenuItem
                    onClick={() => scrollToSection(item.id)}
                    key={item.id}
                  >
                    {item.name}
                  </MenuItem>
                );
              })}
              <Divider />
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </Box>
  );
}

export default AppAppBar;
