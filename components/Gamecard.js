import * as React from "react";
import { Card, CardActionArea, Button, CardContent } from "@mui/material";

export default function Gamecard() {
    const [bets, setBets] = React.useState(0)

    function handleClick() {
        setBets(bets + 1)
        console.log(bets)
    }
return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClick}>
            <CardContent>
                {bets}
            </CardContent>
        </CardActionArea>
    </Card>
)
}