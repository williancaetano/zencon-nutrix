import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccessRequestService } from './access-request.service';
import { CreateAccessRequestDto } from './dto/create-access-request.dto';
import { UpdateAccessRequestDto } from './dto/update-access-request.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('access-request')
@ApiTags('acccess Request')
export class AccessRequestController {
  constructor(private readonly accessRequestService: AccessRequestService) {}

  @Post(':walletFrom/:walletTo')
  create(@Param('walletFrom') walletFrom: string, @Param('walletTo') walletTo: string) {
    return this.accessRequestService.create(walletFrom, walletTo);
  }

  @Get('/pendingByWalletTo/:walletTo')
  pendingByWalletTo(@Param('walletTo') walletTo: string) {
    return this.accessRequestService.getPendingByWalletTo(walletTo);
  }

  @Get('/pendingByWalletFrom/:walletFrom')
  pendingByWalletFrom(@Param('walletFrom') walletFrom: string) {
    return this.accessRequestService.getPendingByWalletFrom(walletFrom);
  }

  @Get('/ById/:id')
  pendingById(@Param('id') id: string) {
    return this.accessRequestService.getById(id);
  }

  @Get('/allByWalletFrom/:walletFrom')
  allByWalletFrom(@Param('walletFrom') walletTo: string) {
    return this.accessRequestService.getAllByWalletFrom(walletTo);
  }

  @Get('/allByWalletTo/:walletTo')
  allByWalletTo(@Param('walletTo') walletTo: string) {
    return this.accessRequestService.getAllByWalletTo(walletTo);
  }

  @Get('/accept/:id')
    acceptAccessRequest(@Param('id') id: string) {
      return this.accessRequestService.acceptAccessRequest(id);
  }

  @Get('/deny/:id')
    denyAccessRequest(@Param('id') id: string) {
      return this.accessRequestService.denyAccessRequest(id);
  }
}
