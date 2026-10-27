import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../utils/database.service';
import type * as ParkingTypes from './parking.interface';

@Injectable()
export class ParkingRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async getOverallTickets(): Promise<ParkingTypes.ParkedVehicleTicket[]> {
    return await this.databaseService.query<ParkingTypes.ParkedVehicleTicket>(
      `SELECT entry_time, spot_id, vehicle_id
       FROM parking_tickets
       WHERE status = $1
       ORDER BY entry_time DESC`,
      ['ACTIVE'],
    );

  }
}
