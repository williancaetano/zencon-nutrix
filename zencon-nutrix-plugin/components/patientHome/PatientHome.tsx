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

export interface AccessRequestType {
    id: number,
    from: string,
    to: string,
    status: number
}


const getRequest = async (walletTo: string, setRequest: any) => {
    console.log('walletTo:', walletTo);
    const request = await fetch(process.env.BACKEND_API as unknown as URL + '/access-request/pendingByWalletTo/' + walletTo, { method: 'GET' });
    const requestResult = await request.json();
    setRequest(requestResult);
    console.log("get: ", requestResult);
    return requestResult;
}

const acceptRequest = async (id: string) => {
    console.log(id);
    await fetch(process.env.BACKEND_API as unknown as URL + '/access-request/accept/' + id, {method: 'GET'})
}

const denyRequest = async (id: string) => {
    console.log(id);
    await fetch(process.env.BACKEND_API as unknown as URL + '/access-request/deny/' + id, {method: 'GET'})
}

export default function PatientHome(props: { patientWallet: { walletAddresses: { ETH: string, ZENIQ: string } } }) {
    console.log(props.patientWallet.walletAddresses.ETH);
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
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Data asked by doctor</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>Allow data access?</p>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant={'outline'} colorScheme='green' mr={3} onClick={() => {acceptRequest(_requests[0]?.id); onClose()}}>
                            Allow
                        </Button>
                        <Button variant={'ghost'} colorScheme='red' onClick={() => {denyRequest(_requests[0]?.id); onClose()}}>Deny</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
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
                <Button colorScheme="red" onClick={() => getRequest(props.patientWallet.walletAddresses.ETH, setRequest)}>
                    Check Access Requests
                </Button>
            </div>
        </>
    )
}