import * as React from "react";
import { Card, CardActionArea, Button, CardContent } from "@mui/material";

export default function Gamecard({ index, counters, setCounters }) {
  function handleClick() {
    let copy = [...counters];
    copy[index] += 1;
    setCounters(copy);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>{counters[index]}</CardContent>
      </CardActionArea>
    </Card>
  );
}
