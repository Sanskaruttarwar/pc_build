import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalpriceService {
  private totalPrice: number = 0;
  private selectedComponents: {[key: string]: any} = {}

  constructor() { }

  updateTotalPrice(price: number): void {
    this.totalPrice += price;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  resetTotalPrice(): void {
    this.totalPrice = 0;
    this.selectedComponents = {};
  }

  updateSelectedComponent(type: string, component: any): void {
    this.selectedComponents[type] = component;
  }

  getSelectedComponent(type: string): any {
    return this.selectedComponents[type];
  }
}
