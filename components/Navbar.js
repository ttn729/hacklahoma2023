import React, { useEffect, useState, useCallback } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Navbar() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const [userName, setUserName] = useState("");

  const getUserTokens = useCallback(async () => {
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

    setUserName(data.name);

    console.log(data);
  }, [user]);

  useEffect(() => {
    if (isLoading) {
      return; // Wait for the user object to load
    }

    if (!user) {
      router.push("/");
    } else {
      getUserTokens();
    }
  }, [user, isLoading, getUserTokens, router]);

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
            <img src={user.picture} alt={user.name} />
            <h2>{userName}</h2>
            <Link href="/settings">
              <p>Settings</p>
            </Link>
            <Link href="/api/auth/logout">Logout</Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}
