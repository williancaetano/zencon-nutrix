import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { CreatePatientDto } from './dto/create-patient.dto';
import { ContractService } from 'src/contract/contract.service';

@Injectable()
export class PatientService {
  constructor(
    private prisma: PrismaService,
    private contract: ContractService,
  ) {}

  async create(createPatientDto: CreatePatientDto): Promise<User> {
    const user: Prisma.UserCreateInput = {
      name: createPatientDto.name,
      wallets: {
        create: {
          address: createPatientDto.wallet,
        },
      },
      roles: {
        create: {
          role: {
            connect: {
              id: 1,
            },
          },
        },
      },
    };
    await this.contract.createPatient(createPatientDto.wallet, '');
    return this.prisma.user.create({
      data: user,
    });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      where: {
        roles: {
          some: {
            role: {
              name: 'Patient',
            },
          },
        },
      },
      include: {
        wallets: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
        roles: {
          some: {
            role: {
              name: 'Patient',
            },
          },
        },
      },
      include: {
        wallets: true,
      },
    });
  }

  // update(id: number, data: Prisma.) {
  //   return `This action updates a #${id} patient`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} patient`;
  // }
}
