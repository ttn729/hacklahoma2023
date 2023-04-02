import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";

export default function Settings() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

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

    setUserName(data.name);

    console.log(data);
  };

  useEffect(() => {
    if (isLoading) return; // Wait for the user object to load

    if (!user) {
      router.push("/");
    } else {
      getUserTokens();
    }

    // setUserName(user.name);
    // setUserPicture(user.picture);
  }, [user, isLoading]);

  const [userName, setUserName] = React.useState("");
  const [userPicture, setUserPicture] = React.useState("");
  const [changeUserName, setChangeUserName] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState(null);

  const updateDB = async () => {
    const response = await fetch("/api/updateTokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        name: changeUserName || userName,
      }),
    });
    // window.location.reload();
    setChangeUserName("")
    router.push("/settings")
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center">
      <Box sx={{ padding: 10 }}>
        <TextField id="outlined-basic" label="Change username"
          value={changeUserName}
          onChange={(e) => setChangeUserName(e.target.value)}
        />
        <p><Button onClick={updateDB} disabled={changeUserName === ""}>Update Information</Button></p>
      </Box>
    </Grid>
  );
}
