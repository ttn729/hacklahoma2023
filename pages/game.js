import React, { useEffect } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Container, Button } from "@mui/material/";
import Gamecard from "../components/Gamecard";
import darthVader from "../public/darthVader.png";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

const Game = () => {
  const [counters, setCounters] = React.useState([0, 0, 0, 0, 0, 0]);
  const [tokens, setTokens] = React.useState(null);
  const { user, error, isLoading } = useUser();

  const getUserTokens = async () => {
    const response = await fetch("/api/getTokenForUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
      }),
    });
    const data = await response.json();

    setTokens(data.tokens);
  };

  useEffect(() => {
    if (isLoading) return; // Wait for the user object to load

    if (!user) {
      router.push("/");
    } else {
      getUserTokens();
    }
  }, [user, isLoading]);

  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (tokens === null) return <div>Loading Tokens...</div>; // Add this line to wait for tokens

  const onClickRoll = () => {
    let tokensSpent = counters.reduce(function (a, b) {
      return a + b;
    });

    let dice = [];

    for (let i = 0; i < 3; ++i) {
      dice.push(Math.floor(Math.random() * 6));
    }

    let newTokenValue =
      tokens - tokensSpent + calculateTokensEarned(counters, dice);

    setTokens(newTokenValue);
    updateDB(newTokenValue);
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

  const updateDB = async (newTokenValue) => {
    const response = await fetch("/api/updateTokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        tokens: newTokenValue,
      }),
    });
  };

  return (
    <Container maxWidth="sm">
      <h1>You currently have: {tokens} tokens.</h1>
      <Grid2 container spacing={2}>
        <Grid2 xs={4}>
          <Gamecard
            index={0}
            counters={counters}
            setCounters={setCounters}
            image={darthVader}
          ></Gamecard>
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

      <Button
        onClick={onClickRoll}
        disabled={
          counters.reduce(function (a, b) {
            return a + b;
          }) > tokens
        }
      >
        Roll
      </Button>
      <Button onClick={onClickReset}>Reset</Button>
    </Container>
  );
};

export default Game;
