import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentItems: object[] = [
    { name: 'Duct Tape', mass: 0.5 },
    { name: 'Space Camera', mass: 20 },
    { name: 'Food', mass: 150 },
    { name: 'Oxygen Tanks', mass: 400 },
    { name: 'AE-35 Unit', mass: 5 },
    { name: 'ISS Supplies', mass: 800 },
    { name: 'Water', mass: 250 },
    { name: 'Satellite', mass: 1200 },
    { name: 'R2 Unit', mass: 32 }
  ];
  cargoHold: object[] = [];
  cargoMass: number = 0;
  maximumAllowedMass: number = 2000;
  maxItems: number = 10;

  // this function determines whether or not the p tag
  // should be styled by the nearMaxMass class
  shouldBeStyled(): boolean {
    return this.maximumAllowedMass - this.cargoMass <= 200;
  }

  // this function determines whether or not any of our buttons
  // should be disabled
  shouldBeDisabled(item: object): boolean {
    const isCargoHoldMaxed = this.cargoHold.length === this.maxItems;
    const isItemTooHeavy = item['mass'] + this.cargoMass > this.maximumAllowedMass;
    return isCargoHoldMaxed || isItemTooHeavy;
  }
  // DONE input: some equipment object
  // DONE should add the inputted equipment into the cargoHold array
  // DONE should increase the cargoMass by the mass of
  // the inputted equipment
  // DONE output: is a boolean that is true if cargoMass is within
  // 200 kg of maximumAllowedMass, false otherwise
  addItem(equipment: object): boolean {
    this.cargoHold.push(equipment);
    this.cargoMass += equipment['mass'];
    // the upper mass limit is 2000 kg
    // when we come within 200 kg of 2000,
    // we should return true
    return this.cargoMass > 1800;
  }

  constructor() { }

  ngOnInit() { }

  // Code your addItem function here:

}
