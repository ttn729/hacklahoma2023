import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

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
            <Link href="/api/auth/login">Login</Link>
          </Button>
        )}

        {user && (
          <Box sx={{ flexDirection: "column" }}>
            <Image src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <Link href="/api/auth/logout">Logout</Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}