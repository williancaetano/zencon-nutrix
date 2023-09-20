import { Injectable } from '@nestjs/common';
import { CreateAccessRequestDto } from './dto/create-access-request.dto';
import { UpdateAccessRequestDto } from './dto/update-access-request.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AccessRequestService {
  constructor(
    private prisma: PrismaService
  ) { }
  async create(walletFrom: string, walletTo: string) {
    const requestModel: Prisma.AccessRequestCreateInput = {
      from: walletFrom,
      to: walletTo,
      status: 0
    }
    const request = await this.prisma.accessRequest.create({ data: requestModel });
    return request;
  }

  async getPendingByWalletFrom(walletFrom: string) {
    const requests = await this.prisma.accessRequest.findMany({
      where: {
        from: walletFrom,
        status: 0
      }
    })
    return requests;
  }

  async getById(id: string) {
    const requests = await this.prisma.accessRequest.findUnique({
      where: {
        id: parseInt(id),
      }
    })
    return requests;
  }

  async getPendingByWalletTo(walletTo: string) {
    const requests = await this.prisma.accessRequest.findMany({
      where: {
        to: walletTo,
        status: 0
      }
    })
    console.log(requests);
    return requests;
  }

  async getAllByWalletFrom(walletFrom: string) {
    const requests = await this.prisma.accessRequest.findMany({
      where: {
        from: walletFrom,
      }
    })
    return requests;
  }

  async getAllByWalletTo(walletTo: string) {
    const requests = await this.prisma.accessRequest.findMany({
      where: {
        to: walletTo,
      }
    })
    return requests;
  }

  async acceptAccessRequest(id: string) {
    const request = await this.prisma.accessRequest.update({
      where: {
        id: parseInt(id)
      },
      data: {
        status: 1
      }
    })
    return request;
  }

  async denyAccessRequest(id: string) {
    const request = await this.prisma.accessRequest.update({
      where: {
        id: parseInt(id)
      },
      data: {
        status: -1
      }
    })
    return request;
  }

}
