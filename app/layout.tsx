import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigate from "@/components/navigation/Navigate";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "inntechspark - technology, and innovation",
  description: "technology, and innovation engineering for the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased fontsans`}
      >
        <Navigate/>
        {children}
      </body>
    </html>
  );
}
