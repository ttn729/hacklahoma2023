import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Settings() {
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

  const router = useRouter();

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
    window.location.reload();
  };

  return (
    <Box sx={{ padding: 5 }}>
      {!changeUserName && (
        <Typography variant="h2">Username: {userName}</Typography>
      )}

      {changeUserName && (
        <Typography variant="h2">Username: {changeUserName}</Typography>
      )}

      <TextField
        value={changeUserName}
        onChange={(e) => setChangeUserName(e.target.value)}
      />

      {/* {!selectedImage && (
        <Typography variant="h2">
          Profile Picture: <img src={userPicture} alt={userName} />
        </Typography>
      )}

      {selectedImage && (
        <Typography variant="h2">
          Profile Picture:{" "}
          <img
            src={URL.createObjectURL(selectedImage)}
            alt={userName}
            width={96}
            height={96}
          />
        </Typography>
      )}

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      /> */}
      <Button onClick={updateDB}>Update Information</Button>
    </Box>
  );
}
