import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import Image from "next/image";
import React from "react";

interface MenuCardInterface {
  src: string;
  title: string;
  content: string;
}

const MenuCard = (params: MenuCardInterface) => {
  return (
    <Card sx={{ maxWidth: 350, margin: "0 auto" }}>
      <CardHeader title={params.title} sx={{ textAlign: "center" }} />
      <CardMedia>
        <Image
          src={params.src}
          width={350}
          height={350}
          alt="Picture of the author"
        />
      </CardMedia>
      <CardContent>{params.content}</CardContent>
    </Card>
  );
};

export default MenuCard;
