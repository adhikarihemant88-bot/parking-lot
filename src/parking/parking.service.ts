import { Injectable } from '@nestjs/common';
import { ParkingRepository } from './ parking.repository';
import type { ParkedVehicleTicket } from './parking.interface';

@Injectable()
export class ParkingService {
  constructor(private readonly parkingRepository: ParkingRepository) {}

  async getOverallTickets(): Promise<{
    message: string;
    data: ParkedVehicleTicket[];
  }> {
    const tickets = await this.parkingRepository.getOverallTickets();
    return { message: 'Tickets fetched successfully', data: tickets };
  }
}
