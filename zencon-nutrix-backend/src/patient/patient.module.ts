import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { PrismaService } from 'src/prisma.service';
import { ContractService } from 'src/contract/contract.service';

@Module({
  controllers: [PatientController],
  providers: [PatientService, PrismaService, ContractService],
})
export class PatientModule {}
