import { Controller, Get } from '@nestjs/common';
import { ParkingService } from './parking.service';

@Controller()
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Get('tickets')
  async getOverallTickets() {
    return await this.parkingService.getOverallTickets();
  }
}
