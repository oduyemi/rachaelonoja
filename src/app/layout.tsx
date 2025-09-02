import type { Metadata } from "next";
import { Providers } from "./providers"; 
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

export const metadata: Metadata = {
  title: "Rachael Onoja",
  description: "Education technology business consultant",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
