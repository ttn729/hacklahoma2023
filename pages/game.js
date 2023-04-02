import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Container, Button } from "@mui/material/";
import Gamecard from "../components/Gamecard";
import darthVader from "../public/darthVader.png";

export default function Game() {
  const [counters, setCounters] = React.useState([0, 0, 0, 0, 0, 0]);
  const [tokens, setTokens] = React.useState(25);

  const onClickRoll = () => {
    let tokensSpent = counters.reduce(function (a, b) {
      return a + b;
    });

    let dice = [];

    for (let i = 0; i < 3; ++i) {
        dice.push(Math.floor(Math.random() * 6));
    }

    setTokens(
      tokens - tokensSpent + calculateTokensEarned(counters, dice)
    );
    onClickReset();
  };

  const onClickReset = () => {
    setCounters([0, 0, 0, 0, 0, 0]);
  };

  const calculateTokensEarned = (counters, dice) => {
    // counters is an array of size 6
    // dice is an array of size 3 with values 0-5(indices of counters)

    let delta = 0;

    let seen = [];

    dice.forEach((index) => {
      if (seen.includes(index)) {
        delta += counters[index];
      } else {
        delta += counters[index] * 2;
        seen.push(index);
      }
    });

    console.log("You earned this many tokens", delta);

    return delta;
  };

  return (
    <Container maxWidth="sm">
      <h1>You currently have: {tokens} tokens.</h1>
      <Grid2 container spacing={2}>
        <Grid2 xs={4}>
          <Gamecard index={0} counters={counters} setCounters={setCounters} image={darthVader}> 
          </Gamecard>
        </Grid2>
        <Grid2 xs={4}>
          <Gamecard
            index={1}
            counters={counters}
            setCounters={setCounters}
            image={darthVader}
          ></Gamecard>
        </Grid2>
        <Grid2 xs={4}>
          <Gamecard
            index={2}
            counters={counters}
            setCounters={setCounters}
            image={darthVader}
          ></Gamecard>
        </Grid2>
        <Grid2 xs={4}>
          <Gamecard
            index={3}
            counters={counters}
            setCounters={setCounters}
            image={darthVader}
          ></Gamecard>
        </Grid2>
        <Grid2 xs={4}>
          <Gamecard
            index={4}
            counters={counters}
            setCounters={setCounters}
            image={darthVader}
          ></Gamecard>
        </Grid2>
        <Grid2 xs={4}>
          <Gamecard
            index={5}
            counters={counters}
            setCounters={setCounters}
            image={darthVader}
          ></Gamecard>
        </Grid2>
      </Grid2>

      <Button onClick={onClickRoll}>Roll</Button>
      <Button onClick={onClickReset}>Reset</Button>
    </Container>
  );
}
