import { Module } from '@nestjs/common';
import { AccessRequestService } from './access-request.service';
import { AccessRequestController } from './access-request.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AccessRequestController],
  providers: [AccessRequestService, PrismaService],
})
export class AccessRequestModule {}
