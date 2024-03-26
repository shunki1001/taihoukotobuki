import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import MenuCard from "../ui/MenuCard";

import ikayaki from "../../../public/img/ikayaki_v3.png";
import senbei from "../../../public/img/senbei_v3.png";

const Menu = () => {
  return (
    <Box
      sx={{
        mt: 0,
        pt: { xs: 20, sm: 26 },
        pb: { xs: 8, sm: 12 },
        px: { xs: 2, sm: 2 },
        background:
          "linear-gradient(rgba(208,112,87,0.1) 0%, rgba(240,240,240,1) 20%)",
        color: "black",
      }}
      id="menu"
    >
      <Container>
        <Grid
          container
          spacing={6}
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "2em", fontWeight: 700 }}>お品書き</p>
            <p style={{ marginTop: "1em" }}>
              先代から受け継ぐ「鉄板」「材料」「レシピ」を使った至高の逸品を紹介。
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <MenuCard
              src={senbei.src}
              title="えびせん"
              content="鉄板でプレスして作られた、パリパリの食感がたまらないえびせんべい。一口食べると、その香りと風味が口いっぱいに広がります。贅沢なえびの風味と、パリパリとした食感が絶妙にマッチ。"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MenuCard
              src={ikayaki.src}
              title="いか焼き"
              content="魔法の粉で仕上げたいかの姿焼き。鉄板の上でプレスして作り上げたいかは、一口食べるとその旨みが広がります。魔法の粉が加える深い味わいは、まさに絶品。もちろんおつまみにも最高です。"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Menu;
