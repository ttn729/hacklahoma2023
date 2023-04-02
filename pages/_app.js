import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

// pages/_app.js
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserProvider>
  );
}
