import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import styles from './style.module.css'
import { patient } from "@/data/data";

export default function PatientData() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [_requests, setRequest] = useState<any>([]);
    useEffect(() => {
        console.log('requests att: ', _requests);
        if (_requests[0]?.status === 0){
            onOpen();
        }
    }, [_requests])
   
    return (
        <>
            <div className={styles.container}>
                <div className={styles.userContainer}>
                    <img className={styles.patientImage} src="/patient.jpeg" alt="patient-image" />
                    <p className={styles.textMain}>{patient.name}</p>
                </div>
                <div className={styles.userInfoContainer}>
                    <div>
                        <p className={styles.textLight}>Age</p>
                        <p className={styles.text}>{patient.age} years</p>
                    </div>

                    <div>
                        <p className={styles.textLight}>height</p>
                        <p className={styles.text}>{patient.height}cm</p>
                    </div>

                    <div>
                        <p className={styles.textLight}>Weight</p>
                        <p className={styles.text}>{patient.weight}kg</p>
                    </div>
                </div>
            </div>
        </>
    )
}