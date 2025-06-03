import { Table, Container, Grid, Box } from "@mui/material";
import React from "react";

const Available = () => {
  return (
    <Box
      sx={{
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
        px: 1,
        background: "rgba(240,240,240,1)",
        color: "black",
      }}
      id="available"
    >
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={3} sm={3}>
            <Box
              sx={{
                writingMode: "vertical-rl",
                margin: "0 auto",
                fontSize: "1.4em",
              }}
            >
              店舗情報
            </Box>
          </Grid>
          <Grid item xs={9} sm={9}>
            <Grid container gap={2}>
              <Grid item xs={12} md={4} sx={{ fontWeight: 700 }}>
                寿の店
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{ borderBottom: "1px rgba(12, 37, 51, 0.2) solid" }}
              >
                先代から受け継ぎ、2024年1月28日にリニューアルオープン
              </Grid>
              <Grid item xs={12} md={4} sx={{ fontWeight: 700 }}>
                住所
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{ borderBottom: "1px rgba(12, 37, 51, 0.2) solid" }}
              >
                愛知県名古屋市熱田区大宝一丁目１－１ ヴェルクレート日比野Ａ棟
              </Grid>
              <Grid item xs={12} md={4} sx={{ fontWeight: 700 }}>
                営業日
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{ borderBottom: "1px rgba(12, 37, 51, 0.2) solid" }}
              >
                【月/火/木～土】12:00-だいたい18:30(変動あり) 【日/水】定休日
              </Grid>
              <Grid item xs={12} md={4} sx={{ fontWeight: 700 }}>
                アクセス
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{ borderBottom: "1px rgba(12, 37, 51, 0.2) solid" }}
              >
                名古屋市営地下鉄日比野駅4番出口　徒歩1分
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Available;
