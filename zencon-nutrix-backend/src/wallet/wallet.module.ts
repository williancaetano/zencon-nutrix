import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [WalletController],
  providers: [WalletService, PrismaService],
})
export class WalletModule {}
