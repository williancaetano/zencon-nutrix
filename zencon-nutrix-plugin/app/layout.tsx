"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import Menu from "./menu/page";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const getRequests = async () => {
  // const requests = fetch()
}

export const getUSerRole = async () => {
  return 'patient';
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  setInterval(() => {
    getRequests();
  }, 1000);
  return (
    <html lang="en">
      <body className={inter.className}>
        <CacheProvider>
          <Header></Header>
          <ChakraProvider>{children}</ChakraProvider>
          <Menu />
        </CacheProvider>
      </body>
    </html>
  );
}