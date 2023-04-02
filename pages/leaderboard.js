import { Box, Typography, Button, Grid } from "@mui/material";
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
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center">
      <Box sx={{ p: 2 }}>
        <Typography variant="h1" color='secondary'>Leaderboard</Typography>
        
        {leaderboardRankings?.map((ranking, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexdirection: "row",
                alignItems: "center",
                // borderBottom: 0,
                padding: 2,
              }}
            >
              <Box>
                <h1>Rank #{index + 1}</h1>
                <h3>Name: {ranking.name}</h3>
                <h3>Tokens: {ranking.tokens}</h3>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
}
