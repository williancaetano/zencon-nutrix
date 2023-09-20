import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class ContractService {
  rpcUrlZeniqSmartChain = 'https://smart.zeniq.network:9545';
  chainIdZeniqSmartChain = 383414847825;

  provider = new ethers.providers.JsonRpcProvider(
    this.rpcUrlZeniqSmartChain,
    this.chainIdZeniqSmartChain,
  );
  wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC);
  signer = new ethers.Wallet(this.wallet.privateKey, this.provider);
  // You can also use an ENS name for the contract address
  address = '0xA56E3e729A0558E36B45A2e079B0Bc6ABaC3d656';

  // The ERC-20 Contract ABI, which is a common contract interface
  // for tokens (this is the Human-Readable ABI format)
  abi = [
    // Functions to create usuarios
    // '',
    'function createPatient(address _userWallet, string memory _initialPatientRecord)',
    'function createMed(address _medWallet, string memory _medId)',

    'function grantMedAccessToPatient(address user, address med)',

    'function addNewPatientRecord(address userWallet, string memory newPatientRecord)',
    'function getPatientLatestRecord(address user, address med)',

    // 'event CreateUser(address _userWallet, string _initialPatientRecord)',
    // 'event CreateMed(address _userWallet, string _medId)',
    // 'event addUserRecordByWallet(address _userWallet)',
    // 'event grantMedAccess(address user, address med, string medId)',
    // 'event med_readLatestRecord(address _userWallet, address _medWallet)',
    // "event DebugLatestRecord(address userWallet, string record)",
  ];

  // The Contract object
  contract = new ethers.Contract(this.address, this.abi, this.provider);

  async createPatient(wallet: string, initialRecord: string) {
    const contractWithSigner = this.contract.connect(this.signer);
    const res = await contractWithSigner.createPatient(wallet, initialRecord, {
      gasLimit: 300000,
    });
    console.log(res);
    return res;
  }

  async createMed(wallet: string, initialRecord: string) {
    const contractWithSigner = this.contract.connect(this.signer);
    const res = await contractWithSigner.createMed(wallet, initialRecord, {
      gasLimit: 300000,
    });
    console.log(res);
    return res;
  }
  async grantMedAccessToPatient(wallet: string, patientWallet: string) {
    const contractWithSigner = this.contract.connect(this.signer);
    return await contractWithSigner.createPatient(wallet, patientWallet, {
      gasLimit: 300000,
    });
  }
  async addNewPatientRecord(wallet: string, newRecord: string) {
    const contractWithSigner = this.contract.connect(this.signer);
    return await contractWithSigner.createPatient(wallet, newRecord, {
      gasLimit: 300000,
    });
  }
  async getPatientLatestRecord(walletPatient: string, walletMed: string) {
    const contractWithSigner = this.contract.connect(this.signer);
    return await contractWithSigner.createPatient(walletPatient, walletMed, {
      gasLimit: 300000,
    });
  }
}
