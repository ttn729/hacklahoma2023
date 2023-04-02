import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

// pages/_app.js
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { appTheme } from "@/themes/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline>
        <UserProvider>
          <Navbar />
          <Component {...pageProps} />
          <Toaster />
        </UserProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}
