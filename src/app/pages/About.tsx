import { Container, Grid, Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import store_front from "../../../public/img/DSC00133.jpg";
import kitchen from "../../../public/img/DSC00310.jpg";
import master from "../../../public/img/DSC00159.jpg";

const About = () => {
  return (
    <Container
      sx={{
        mt: "150vh",
        pb: { xs: 30, sm: 42 },
        background:
          "linear-gradient(rgba(253,212,110,0) 0%, rgba(253,212,110,1) 20%, rgba(253,212,110,1) 90%, rgba(253,212,110,0.1) 100%)",
        color: "#A74535",
        position: "relative",
        zIndex: -10,
      }}
    >
      <Box
        sx={{
          mb: 20,
          pt: "2em",
          color: "#a74535",
          fontSize: "2em",
          fontWeight: 700,
          writingMode: "vertical-rl",
          margin: "0 auto",
        }}
      >
        寿が集まる店
      </Box>
      <Grid
        container
        sx={{
          mt: "2em",
          mb: { xs: 32, sm: 48 },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Image
            src={store_front}
            layout="responsive"
            alt="Picture of the author"
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ px: 2, py: 1, zIndex: 0 }}>
          お酒を造る人がいる。 食材を育てる人がいる。
          そして、届けてくれる人がいる。 ふるさとは「美味しい」のバトンを、
          お客様へと繋ぎます。
        </Grid>
        <Grid item xs={12} sm={6} sx={{ px: 2, py: 1 }}>
          ひとつの日本酒との出会いがきっかけでふるさとは生まれたと言ってもいいかもしれません。
          造り手の想いが込められた日本酒には、それだけの魅力が詰まっています。
          この魅力をより多くの人に伝えられるお店を目指し、
          全国各地の日本酒をご用意しております。
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image
            src={kitchen}
            layout="responsive"
            alt="Picture of the author"
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: 7 }}>
          <Image src={master} layout="responsive" alt="Picture of the author" />
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: 0,
          width: "80vw",
          height: "100vh",
          background: "#fffbd4",
          zIndex: -5,
        }}
      ></Box>
    </Container>
  );
};

export default About;
