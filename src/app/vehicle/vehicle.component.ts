import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Array<Vehicle> = []
  vehiclesByBrand: Record<string, number> = {}
  objectKeys = Object.keys;

  constructor(private vehicleService: VehicleService) { }
  
  getVehicles(){
    this.vehicleService.getVehicles().subscribe({
      next: (vehicles) => {
        this.vehicles = vehicles
        this.getVehiclesByBrand()
      },
      error: (error) => {
        console.error('Error getting vehicles!', error);
      }
    });
  }

  getVehiclesByBrand(){
    this.vehiclesByBrand = {};
    for (const vehicle of this.vehicles) {
      this.vehiclesByBrand[vehicle.marca] = (this.vehiclesByBrand[vehicle.marca] || 0) + 1;
    }
  }

  ngOnInit(): void {
    this.getVehicles()
  }
}
