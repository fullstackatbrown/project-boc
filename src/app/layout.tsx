import type { Metadata } from "next";
import { GoogleOAuthProvider } from "@react-oauth/google"
import localFont from "next/font/local";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Brown Outing Club",
  description: "Brown Unversity Outing Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "default_client_id";
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </GoogleOAuthProvider>
  );
}
