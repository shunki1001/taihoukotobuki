import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import Image from "next/image";
import React from "react";

interface MenuCardInterface {
  src: String;
  title: String;
  content: String;
}

const MenuCard = (params: MenuCardInterface) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader title={params.title} />
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
