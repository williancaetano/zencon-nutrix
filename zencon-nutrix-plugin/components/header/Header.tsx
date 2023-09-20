import React from "react";
import { Box } from "@chakra-ui/react";
import styles from './style.module.css'

export default function Header() {
    return (
        <>
            <Box backgroundColor={'white'} height={60} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <img className={styles.headerImage} src="/gsense.svg" alt="gsense-logo" />
            </Box>
        </>
    )
}