import { Component, OnInit } from '@angular/core';
import { TotalpriceService } from '../totalprice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{

  selectedCpu: any;
  case : any;
  caseFan: any;
  cpuCooler: any;
  external: any;
  memory: any;
  motherboard : any;
  powersupply: any;
  // totalPrice: number = 0;

  constructor(private totalPriceService: TotalpriceService){}

  ngOnInit(): void {
    this.selectedCpu = this.totalPriceService.getSelectedComponent('cpu');
    this.case = this.totalPriceService.getSelectedComponent('case');
    this.caseFan = this.totalPriceService.getSelectedComponent('casefan');
    this.cpuCooler = this.totalPriceService.getSelectedComponent('cpucooler');
    this.external = this.totalPriceService.getSelectedComponent('external');
    this.memory = this.totalPriceService.getSelectedComponent('memory');
    this.motherboard = this.totalPriceService.getSelectedComponent('motherboard');
    this.powersupply = this.totalPriceService.getSelectedComponent('powerSupply');
    
  }

  get totalPrice(): number {
    return this.totalPriceService.getTotalPrice();
  }

  resetTotal(): void {
    this.totalPriceService.resetTotalPrice();
    this.selectedCpu = null;
    this.case = null;
    this.caseFan = null;
    this.cpuCooler = null;
    this.external = null;
    this.motherboard = null;
    this.memory = null;
    this.powersupply = null;

  }
  

  // updateTotal(price: number): void {
  //   console.log('Updating total price:', price); 
  //   this.totalPrice += price;
  // }

}
