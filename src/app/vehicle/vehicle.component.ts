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
  constructor(private vehicleService: VehicleService) { }
  
  getVehicles(){
    this.vehicleService.getVehicles().subscribe(vehicles => 
      this.vehicles = vehicles
    );
  }

  ngOnInit(): void {
    this.getVehicles()
  }
}
