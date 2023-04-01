import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Container, Button } from "@mui/material/";
import Gamecard from "../components/Gamecard";

export default function Game() {
  const [counters, setCounters] = React.useState([0, 0, 0, 0, 0, 0]);
  const [tokens, setTokens] = React.useState(25);

  const onClickRoll = () => {

    let sum = counters.reduce(function(a, b){
        return a + b;
      });
    console.log(sum);
  };

  const onClickReset = () => {
    setCounters([0, 0, 0, 0, 0, 0]);
  }

  return (
    <Container maxWidth="sm">
        <h1>You currently have: {tokens} tokens.</h1>
      <Grid2 container spacing={2}>
        <Grid2 xs={4}>
          <Gamecard
            index={0}
            counters={counters}
            setCounters={setCounters}
          ></Gamecard>
        </Grid2>
        <Grid2 xs={4}>
          <Gamecard
            index={1}
            counters={counters}
            setCounters={setCounters}
          ></Gamecard>
        </Grid2>
        <Grid2 xs={4}>
          <Gamecard
            index={2}
            counters={counters}
            setCounters={setCounters}
          ></Gamecard>
        </Grid2>
        <Grid2 xs={4}>
          <Gamecard
            index={3}
            counters={counters}
            setCounters={setCounters}
          ></Gamecard>
        </Grid2>
        <Grid2 xs={4}>
          <Gamecard
            index={4}
            counters={counters}
            setCounters={setCounters}
          ></Gamecard>
        </Grid2>
        <Grid2 xs={4}>
          <Gamecard
            index={5}
            counters={counters}
            setCounters={setCounters}
          ></Gamecard>
        </Grid2>
      </Grid2>

      <Button onClick={onClickRoll}>Roll</Button>
      <Button onClick={onClickReset}>Reset</Button>

    </Container>
  );
}
