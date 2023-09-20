import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  wallet: string;
}
