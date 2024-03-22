import { Container, Grid } from "@mui/material";
import React from "react";

const Access = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: { xs: 8, sm: 12 },
        background: "rgba(240,240,240,1)",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7760.540411978925!2d136.89205400545873!3d35.1340365438041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003775dda7f4e89%3A0xce028ef01df7fa63!2z5aSn5a6d5a-_!5e0!3m2!1sen!2sjp!4v1711110557924!5m2!1sen!2sjp"
        width="100%"
        height="500px"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default Access;
