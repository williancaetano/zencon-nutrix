"use client";
import NextLink from "next/link";
import { Link, Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { RepeatClockIcon } from "@chakra-ui/icons";
import { AiOutlineHome } from "react-icons/ai";

const Menu = () => {
  return (
    <Box
      position="sticky"
      bottom="0"
      height="10dvh"
      backgroundColor="white"
      display="grid"
      alignItems="center"
      gridTemplateColumns="repeat(2, 1fr)"
    >
      {/* <Link
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        as={NextLink}
        href="/requests"
      >
        <AddIcon />
      </Link> */}
      <Link
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        as={NextLink}
        href="/"
      >
        <AiOutlineHome />
      </Link>
      <Link
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        as={NextLink}
        href="/history"
      >
        <RepeatClockIcon />
      </Link>
    </Box>
  );
};

export default Menu;
