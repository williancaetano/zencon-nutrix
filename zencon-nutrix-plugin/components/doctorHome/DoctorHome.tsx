import React, { useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    useToast,
    useDisclosure,
    Spinner,
} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { patient } from "@/data/data";
import PatientData from "@/patientData/patientData";



const createRequest = async (walletFrom: string, walletTo: string, openModal: any, setRequest: any) => {
    const response = await fetch(process.env.BACKEND_API as unknown as URL + `/access-request/${walletFrom}/${patient.wallet}`, { method: 'POST' });
    const req = await response.json();
    setRequest(req);
    openModal();
}

const checkPermission = async (id: string, displayData: any) => {
    console.log(id);
    const response = await fetch(process.env.BACKEND_API as unknown as URL + `/access-request/ById/${id}`, { method: 'GET' });
    const req = await response.json();
    if (req.status === 1) {
        displayData(true);
    }

}

export default function DoctorHome(props: { doctorWallet: { walletAddresses: { ETH: string, ZENIQ: string } } }) {
    console.log(props.doctorWallet.walletAddresses.ETH);
    const [request, setRequest] = useState<any>();
    const [displayData, setDisplayData] = useState<boolean>();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    return (
        <>
            {displayData === true ? <PatientData></PatientData> :
                <>
                    <Modal isOpen={isOpen} onClose={() => {onClose}}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Waiting for approval</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Button onClick={() => { checkPermission(request.id, setDisplayData) }}>Check Permission Status</Button>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Patients</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td onClick={() => {
                                        createRequest(props.doctorWallet.walletAddresses.ETH, patient.wallet, onOpen, setRequest);
                                        toast({
                                            title: 'Access request sent.',
                                            description: "sending access request to this wallet",
                                            status: 'success',
                                            duration: 9000,
                                            isClosable: true,
                                        })
                                    }}>
                                        Lohan Cravo Guedes
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </>
            }
        </>
    )
}