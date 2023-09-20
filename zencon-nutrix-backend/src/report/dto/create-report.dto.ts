import { ApiProperty } from '@nestjs/swagger';

export class CreateReportDto {
  @ApiProperty()
  content: string;

  @ApiProperty()
  patientId: number;

  @ApiProperty()
  doctorId: number;
}
