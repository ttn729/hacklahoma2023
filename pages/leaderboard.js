import { Box, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Leaderboard() {
  const [leaderboardRankings, setLeaderboardRankings] = React.useState([]);

  const updatedTokens = async () => {
    const response = await fetch("/api/updateTokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Tiffany",
        email: "hello@ou.edu",
        tokens: 5,
      }),
    });
    console.log(response);
  };

  const getTokens = async () => {
    const response = await fetch("/api/getTokens", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.json().then((json) => {
      setLeaderboardRankings(json);
    });
  };

  useEffect(() => {
    getTokens();
  }, [leaderboardRankings]);

  return (
    <Box sx={{ paddingTop: 5 }}>
      <Typography variant="h1">Leaderboard Top 10</Typography>
      <Button onClick={updatedTokens}>Click on me to change the DB</Button>

      {leaderboardRankings?.map((ranking, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexdirection: "row",
              alignItems: "center",
              border: 1,
              padding: 3,
            }}
          >
            <Box>
              <h1>Rank #{index + 1}</h1>
              <h1>Email: {ranking.email}</h1>
              <h1>Tokens: {ranking.tokens}</h1>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
