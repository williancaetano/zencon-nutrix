"use client";

import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  Heading,
  CardFooter,
  Text,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { getUSerRole } from "../layout";

const Requests = () => {
  const userRole = getUSerRole();
  const requests = 1;
  return (
    <>
      <Box height='10dvh' paddingTop="50px">

      </Box>
    </>
    // <Box marginTop={100} height="90dvh">
    //   {requests ? (
    //     <Box height="100%">
    //       <Box display="flex" flexDirection="column" alignItems="center">
    //         <Avatar
    //           name="Dan Abrahmov"
    //           src="https://nutrix.tech/wp-content/uploads/2023/03/Christian.png"
    //         />
    //         <Text>Joao Silva</Text>
    //       </Box>
    //       <Box width="100%" marginTop={10}>
    //         <IconButton
    //           width="50%"
    //           icon={<AiFillCheckCircle />}
    //           aria-label={"Approve"}
    //           colorScheme="green"
    //         >
    //           Approve
    //         </IconButton>
    //         <IconButton
    //           width="50%"
    //           icon={<AiFillCloseCircle />}
    //           aria-label={"Refuse"}
    //           colorScheme="red"
    //         >
    //           Refuse
    //         </IconButton>
    //       </Box>
    //     </Box>
    //   ) : (
    //     <Card align="center">
    //       <CardHeader>
    //         <Heading size="md"> Solicitações</Heading>
    //       </CardHeader>
    //       <CardBody>
    //         <Text>
    //           Nao há nenhuma requisicao de acesso aos seus dados medicos
    //         </Text>
    //       </CardBody>
    //       <CardFooter></CardFooter>
    //     </Card>
    //   )}
    // </Box>
  );
};

export default Requests;
