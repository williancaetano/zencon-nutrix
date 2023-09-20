import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { PrismaService } from 'src/prisma.service';
import { PatientService } from 'src/patient/patient.service';
import { DoctorService } from 'src/doctor/doctor.service';
import { ContractService } from 'src/contract/contract.service';

@Module({
  controllers: [ReportController],
  providers: [
    ReportService,
    PrismaService,
    PatientService,
    DoctorService,
    ContractService,
  ],
})
export class ReportModule {}
