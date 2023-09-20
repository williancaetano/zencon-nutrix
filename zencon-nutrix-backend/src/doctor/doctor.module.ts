import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { PrismaService } from 'src/prisma.service';
import { ContractService } from 'src/contract/contract.service';

@Module({
  controllers: [DoctorController],
  providers: [DoctorService, PrismaService, ContractService],
})
export class DoctorModule {}
