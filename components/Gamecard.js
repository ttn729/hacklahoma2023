import * as React from "react";
import { Card, CardActionArea, Button, CardContent } from "@mui/material";
import Image from "next/image";

export default function Gamecard({ index, counters, setCounters, image }) {
  function handleClick() {
    let copy = [...counters];
    copy[index] += 1;
    setCounters(copy);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleClick}>
        <Image src={image} alt="" width={150} height={150}/>
        <CardContent>{counters[index]}</CardContent>
      </CardActionArea>
    </Card>
  );
}
