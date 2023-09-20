import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('report')
@ApiTags('Reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
  create(@Body() createReportDto: CreateReportDto) {
    return this.reportService.create(createReportDto);
  }

  @Get(':id')
  findByPatient(@Param('id') id: string) {
    return this.reportService.findByPatient(+id);
  }
}
