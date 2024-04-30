import { Box, Container } from "@mui/material";
import React from "react";

const Youtube = () => {
  return (
    <Box
      sx={{ pb: { xs: 4, sm: 6 }, background: "rgba(240,240,240,1)" }}
      id="youtube"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "2em", fontWeight: 700, marginBottom: "1em" }}>
          寿の店PV
        </p>
        <iframe
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "16/9",
            maxWidth: 600,
          }}
          src="https://www.youtube.com/embed/WcsSQl0Ai0w?si=2PsS85-MavsRMY-9"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Container>
    </Box>
  );
};

export default Youtube;
