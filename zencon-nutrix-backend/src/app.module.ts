import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { WalletModule } from './wallet/wallet.module';
import { AccessRequestModule } from './access-request/access-request.module';
import { ContractModule } from './contract/contract.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [
    PatientModule,
    DoctorModule,
    WalletModule,
    ContractModule,
    ReportModule,
    AccessRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
