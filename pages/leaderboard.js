import { Box, Typography, Button } from "@mui/material";

export default function Leaderboard() {
  const updatedTokens = async () => {
    const response = await fetch("/api/updateTokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Tiffany",
        tokens: 5,
      }),
    });
    console.log(response);
  };

  return (
    <Box sx={{paddingTop: 5}}>
      <Typography variant="h1">Leaderboard</Typography>
      <Button onClick={updatedTokens}>Click on me to change the DB</Button>
    </Box>
  );
}
