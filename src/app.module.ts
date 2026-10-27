import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './common/http-exception.filter';
import { SuccessInterceptor } from './common/success.interceptor';
import { ParkingRepository } from './parking/ parking.repository';
import { Module } from '@nestjs/common';
import { ParkingController } from './parking/parking.controller';
import { ParkingService } from './parking/parking.service';
import { DatabaseService } from './utils/database.service';

@Module({
  imports: [],
  controllers: [ ParkingController],
  providers: [
    ParkingService,
    ParkingRepository,
    DatabaseService,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: SuccessInterceptor },
  ],
})
export class AppModule {}
