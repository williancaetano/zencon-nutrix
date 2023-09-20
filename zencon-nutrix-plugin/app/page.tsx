"use client";
import { Component, useEffect, useState } from "react";
import { nomo } from "nomo-plugin-kit/dist/nomo_api";
import { useNomoState } from "./(hooks)/useNomoState";
import { Box, Button } from "@chakra-ui/react";
import Menu from "./menu/page";
import PatientHome from "@/components/patientHome/PatientHome";
import DoctorHome from "@/components/doctorHome/DoctorHome";
import { getUSerRole } from "./layout";

const App = () => {
  const [userRole, setUserRole] = useState('patient');
  const [walletAddresses, walletAddressesStatus] = useNomoState(
    nomo.getWalletAddresses
  );

  useEffect(() => {
    nomo.enableMobileConsoleDebugging();
    if (walletAddressesStatus === 'success') {
      getUSerRole().then((userRole) => setUserRole(userRole));
    }
  }, [walletAddressesStatus]);

  if (walletAddressesStatus === "loading")
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Loading...
      </main>
    );

  return (
    <Box height="85dvh">
      <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'} backgroundColor="#fff">
        <Button onClick={() => { setUserRole('doctor') }}>
          role doctor
        </Button>
        <Button onClick={() => { setUserRole('patient') }}>
          role patient
        </Button>

      </Box>
      {userRole === 'patient' ? <PatientHome patientWallet={walletAddresses}></PatientHome> : <DoctorHome doctorWallet={walletAddresses}></DoctorHome>}
    </Box>);
};

export default App;
