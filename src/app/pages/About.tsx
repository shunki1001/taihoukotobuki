import { Container, Grid, Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import store_front from "../../../public/img/DSC00133.jpg";
import kitchen from "../../../public/img/DSC00310.jpg";
import master from "../../../public/img/DSC00159.jpg";
import teppan from "../../../public/img/teppan.jpg";

const About = () => {
  return (
    <Box
      sx={{
        mt: "100vh",
        pb: 10,
        background:
          "linear-gradient(rgba(253,212,110,0) 0%, rgba(253,212,110,1) 20%, rgba(253,212,110,1) 90%, rgba(253,212,110,0.1) 100%)",
        color: "#A74535",
        position: "relative",
        zIndex: -10,
      }}
      id="about"
    >
      <Container>
        <Grid
          container
          sx={{
            mt: "2em",
            mb: { xs: 32, sm: 48 },
          }}
        >
          <Grid size={{ xs: 12, sm: 12 }} sx={{ textAlign: "center" }}>
            <p
              style={{
                display: "inline-block",
                whiteSpace: "pre",
                paddingBottom: "2em",
                paddingTop: "2em",
                color: "#a74535",
                fontSize: "2em",
                fontWeight: 700,
                writingMode: "vertical-rl",
              }}
            >
              寿が集まる店
            </p>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Image
              src={store_front}
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 600px) 100vw, 50vw"
              alt="「寿の店」の店頭外観"
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ px: 2, py: { xs: 1, sm: 6 }, zIndex: 0, lineHeight: 2 }}
          >
            誰でも気軽に立ち寄れるアットホームな雰囲気。地元の方々からも親しまれています。
            大宝１丁目１－１にある「寿」の店。
            みなさんが気軽に立ち寄れるお店でありたいと願っています。
          </Grid>
          <Grid size={{ xs: 12, sm: 0 }} sx={{ height: "48px" }}></Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ px: 2, py: { xs: 1, sm: 6 }, lineHeight: 1.75 }}
          >
            当店は鉄板プレス機を使用した料理が自慢。また、先代から受け継ぐ魔法の粉を使用した料理をお楽しみいただけます。
            ぱりぱりのせんべいやピリ辛のいかやきは、おやつはもちろんお酒のおつまみとしても最高。
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Image
              src={kitchen}
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 600px) 100vw, 50vw"
              alt="鉄板で焼き上げるいかやき"
            />
          </Grid>
          <Grid size={{ xs: 0, sm: 1 }}></Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ mt: 7 }}>
            <Image
              src={master}
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 600px) 100vw, 50vw"
              alt="厨房で仕込みをする店主"
            />
          </Grid>
          <Grid size={{ xs: 0, sm: 5 }}></Grid>
          <Grid size={{ xs: 12, sm: 0 }} sx={{ height: "10vh" }}></Grid>
          <Grid size={{ xs: 0, sm: 4 }}></Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ mt: 7 }}>
            <Image
              src={teppan}
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 600px) 100vw, 50vw"
              alt="鉄板プレス機"
            />
          </Grid>
          <Grid size={{ xs: 0, sm: 2 }}></Grid>
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
    </Box>
  );
};

export default About;
