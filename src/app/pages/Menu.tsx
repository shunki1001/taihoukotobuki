import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import MenuCard from "../ui/MenuCard";

import ikayaki from "../../../public/img/ikayaki_v3.png";
import senbei from "../../../public/img/senbei_v3.png";

const Menu = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
        background:
          "linear-gradient(rgba(240,240,240,0.5) 0%, rgba(240,240,240,1) 20%)",
        color: "black",
      }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} md={12} sx={{ textAlign: "center" }}>
          <h3>お品書き</h3>
          先代から受け継ぐ「鉄板」「材料」「レシピ」を使った至高の逸品を紹介。
        </Grid>
        <Grid item xs={12} md={6}>
          <MenuCard
            src={ikayaki}
            title="いか焼き"
            content="魔法の粉で仕上げたいかの姿焼き。鉄板の上でプレスして作り上げたいかは、一口食べるとその旨みが広がります。魔法の粉が加える深い味わいは、まさに絶品。もちろんおつまみにも最高です。"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MenuCard
            src={senbei}
            title="えびせん"
            content="鉄板でプレスして作られた、パリパリの食感がたまらないえびせんべい。一口食べると、その香りと風味が口いっぱいに広がります。贅沢なえびの風味と、パリパリとした食感が絶妙にマッチ。"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Menu;
