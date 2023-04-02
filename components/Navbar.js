import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Box
      sx={{
        justifyItems: "space-between",
        flexDirection: "row",
        m: 5,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          float: "left",
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <Link href="/leaderboard">
          <h1>Leaderboard</h1>
        </Link>
      </Box>

      <Box sx={{ float: "right" }}>
        {!user && (
          <Button variant="contained">
            <a href="/api/auth/login">Login</a>
          </Button>
        )}

        {user && (
          <Box sx={{ flexDirection: "column" }}>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <a href="/api/auth/logout">Logout</a>
          </Box>
        )}
      </Box>
    </Box>
  );
}