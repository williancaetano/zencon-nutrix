import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class WalletService {
  constructor(private prisma: PrismaService) {}

  create(createWalletDto: CreateWalletDto) {
    const wallet: Prisma.WalletCreateInput = {
      address: createWalletDto.address,
      user: {
        connect: {
          id: createWalletDto.userId,
        },
      },
    };

    return this.prisma.wallet.create({
      data: wallet,
    });
  }

  findAll() {
    return this.prisma.wallet.findMany();
  }

  findOne(id: number) {
    return this.prisma.wallet.findUnique({
      where: {
        id,
      },
    });
  }

  findRole(wallet: string) {
    return this.prisma.role.findFirst({
      where: {
        users: {
          some: {
            user: {
              wallets: {
                some: {
                  address: wallet,
                },
              },
            },
          },
        },
      },
      select: {
        name: true,
      },
    });
  }
}
