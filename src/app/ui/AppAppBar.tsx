"use client";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, MenuItem } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import React from "react";
import router, { RouterInterface } from "../router/router";
import Image from "next/image";

import logo from "../../../public/img/logo.png";
import Link from "next/link";

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
          height: "40vh",
          position: "absolute",
          borderRadius: "0px 0px 1vh 1vh",
          zIndex: "-5",
        }}
      ></Box>
      <Toolbar
        variant="regular"
        sx={(theme) => ({
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexShrink: 0,
          borderRadius: "999px",
          pt: { xs: 1, sm: 2 },
        })}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "flex-start",
            color: "#a74535",
            fontWeight: "bold",
            ml: "-18px",
            px: 0,
          }}
        >
          <Link href="/">
            <p
              style={{
                paddingLeft: "1em",
                writingMode: "vertical-rl",
                fontSize: "1.4em",
              }}
            >
              寿の店
            </p>
          </Link>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 0.5,
              alignItems: "center",
              flexGrow: 1,
            }}
          ></Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              pr: 2,
            }}
          >
            {router.map((item: RouterInterface, index: number) => {
              return (
                <>
                  {index == 0 ? (
                    <MenuItem
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        fontWeight: "bold",
                        py: 1,
                        px: 2,
                        writingMode: "vertical-rl",
                        borderLeft: "1px solid #a74535",
                        borderRight: "1px solid #a74535",
                      }}
                      key={item.id}
                    >
                      {item.name}
                    </MenuItem>
                  ) : (
                    <MenuItem
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        fontWeight: "bold",
                        py: 1,
                        px: 2,
                        writingMode: "vertical-rl",
                        borderRight: "1px solid #a74535",
                      }}
                      key={item.id}
                    >
                      {item.name}
                    </MenuItem>
                  )}
                </>
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
      <Box sx={{ textAlign: "center" }}>
        <Image
          src={logo}
          height={150}
          width={150}
          alt="top view"
          style={{ margin: "2em 0" }}
        />
      </Box>
    </Box>
  );
}

export default AppAppBar;
