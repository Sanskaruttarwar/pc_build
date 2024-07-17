import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { powersupply } from '../component';
import { TotalpriceService } from '../totalprice.service';

@Component({
  selector: 'app-powersupply',
  templateUrl: './powersupply.component.html',
  styleUrl: './powersupply.component.css'
})
export class PowersupplyComponent implements OnInit {
  powerSupply : powersupply[] =[];
displayed : powersupply[] = [];
currentPage:number = 1;
pageSize: number = 12;
  totalItems: number = 0;

  constructor(private router:Router, private http: HttpClient, private totalPriceService: TotalpriceService){}

  ngOnInit(): void {
    this.http.get<powersupply[]>('http://localhost:3000/powersupply').subscribe((data)=>{
      this.powerSupply = data;
      this.totalItems = data.length;
      this.setPage(1);
    })
  }

  setPage(page: number): void{
    this.currentPage = page;
    const start = (page - 1)* this.pageSize;
    const end = start + this.pageSize;
    this.displayed = this.powerSupply.slice(start, end);
  }

  onPageChange(page: number): void{
        this.setPage(page);
      }

  get totalPages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  addToTotal(power: powersupply): void {
    this.totalPriceService.updateTotalPrice(power.price*100);
    this.totalPriceService.updateSelectedComponent('powerSupply',power);
  }

}
