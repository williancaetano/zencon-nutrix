import { Controller, Post, Body } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('contract')
@ApiTags('Contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post('createPatient')
  async createPatient(@Body() data: { wallet: string; initialRecord: string }) {
    return await this.contractService.createPatient(
      data.wallet,
      data.initialRecord,
    );
  }

  @Post('createMed')
  async createMed(@Body() data: { wallet: string; initialRecord: string }) {
    return await this.contractService.createMed(
      data.wallet,
      data.initialRecord,
    );
  }

  @Post('grantMedAccessToPatient')
  async grantMedAccessToPatient(
    @Body() data: { wallet: string; patientWallet: string },
  ) {
    return await this.contractService.createMed(
      data.wallet,
      data.patientWallet,
    );
  }

  @Post('addNewPatientRecord')
  async addNewPatientRecord(
    @Body() data: { wallet: string; newRecord: string },
  ) {
    return await this.contractService.createMed(data.wallet, data.newRecord);
  }
  @Post('getPatientLatestRecord')
  async getPatientLatestRecord(
    @Body() data: { walletPatient: string; walletMed: string },
  ) {
    return await this.contractService.createMed(
      data.walletPatient,
      data.walletMed,
    );
  }
}
