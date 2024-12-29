"use client";
import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function Auth() {
  const [user, setUser] = useState(null);
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;


  const handleLoginSuccess = async (response) => {
    try {
      const credential = response.code; // This is the JWT token from Google

      // Send the token to the backend for verification and user retrieval
      const { data } = await axios.post("http://localhost:8080/auth/google", {
        code: credential,
      });
      setUser(data["user"]); // Assuming backend returns user info
    } catch (error) {
      console.error("Error during authentication", error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error("Login failed", error);
  };

  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    flow: "auth-code",
  });

  return <button onClick={() => login()}>Sign in with Google</button>;
}
