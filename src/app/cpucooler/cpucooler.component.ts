import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { cpucooler } from '../component';
import { TotalpriceService } from '../totalprice.service';

@Component({
  selector: 'app-cpucooler',
  templateUrl: './cpucooler.component.html',
  styleUrl: './cpucooler.component.css'
})
export class CpucoolerComponent {

  cpuCooler : cpucooler[] =[];
displayed : cpucooler[] = [];
currentPage:number = 1;
pageSize: number = 12;
  totalItems: number = 0;

  constructor(private router:Router, private http: HttpClient, private totalPriceService: TotalpriceService){}

  ngOnInit(): void {
    this.http.get<cpucooler[]>('http://localhost:3000/cpucooler').subscribe((data)=>{
      this.cpuCooler = data;
      console.log(data);
      this.totalItems = data.length;
      this.setPage(1);
    })
  }

  setPage(page: number): void{
    this.currentPage = page;
    const start = (page - 1)* this.pageSize;
    const end = start + this.pageSize;
    this.displayed = this.cpuCooler.slice(start, end);
  }

  onPageChange(page: number): void{
        this.setPage(page);
      }

  get totalPages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  addToTotal(cpucooler: cpucooler): void {
    this.totalPriceService.updateTotalPrice(cpucooler.price*100);
    this.totalPriceService.updateSelectedComponent('cpucooler',cpucooler);
  }
}
