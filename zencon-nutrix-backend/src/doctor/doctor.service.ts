import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { ContractService } from 'src/contract/contract.service';

@Injectable()
export class DoctorService {
  constructor(
    private prisma: PrismaService,
    private contract: ContractService,
  ) {}

  async create(createDoctorDto: CreateDoctorDto) {
    const user: Prisma.UserCreateInput = {
      name: createDoctorDto.name,
      wallets: {
        create: {
          address: createDoctorDto.wallet,
        },
      },
      roles: {
        create: {
          role: {
            connect: {
              id: 2,
            },
          },
        },
      },
    };
    await this.contract.createMed(createDoctorDto.wallet, '');
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
              name: 'Doctor',
            },
          },
        },
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
              name: 'Doctor',
            },
          },
        },
      },
      include: {
        wallets: true,
      },
    });
  }
}
