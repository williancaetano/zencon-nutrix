import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { PatientService } from 'src/patient/patient.service';
import { DoctorService } from 'src/doctor/doctor.service';
import { ContractService } from 'src/contract/contract.service';

@Injectable()
export class ReportService {
  constructor(
    private prisma: PrismaService,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private contract: ContractService,
  ) {}

  async create(createReportDto: CreateReportDto) {
    const report: Prisma.ReportCreateInput = {
      content: createReportDto.content,
      patient: {
        connect: {
          id: createReportDto.patientId,
        },
      },
      doctor: {
        connect: {
          id: createReportDto.doctorId,
        },
      },
    };
    const patient = await this.patientService.findOne(
      createReportDto.patientId,
    );
    const reportRes = this.prisma.report.create({ data: report });
    const res = await this.contract.addNewPatientRecord(
      patient.wallets[0].address,
      (await reportRes).id.toString(),
    );
    console.log(res);
    return report;
  }

  findByPatient(patientId: number) {
    const patient = this.patientService.findOne(patientId);
    if (!patient) return [];
    return this.prisma.report.findMany({
      where: {
        patientId,
      },
    });
  }
}
