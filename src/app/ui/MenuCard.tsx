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
      <CardMedia>
        <Image
          src={params.src}
          width={350}
          height={350}
          alt="Picture of the author"
        />
      </CardMedia>
      <CardContent>
        <p style={{ fontSize: "1.4em" }}>{params.title}</p>
        <p style={{ fontSize: "1em" }}>{params.content}</p>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
