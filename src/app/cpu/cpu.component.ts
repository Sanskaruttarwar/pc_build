import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { cpus } from '../component';
import { TotalpriceService } from '../totalprice.service';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrl: './cpu.component.css'
})
export class CpuComponent implements OnInit {

// public cpu: any;
cpu : cpus[] =[];
displayed : cpus[] = [];
currentPage:number = 1;
pageSize: number = 12;
  totalItems: number = 0;

  // @Output() addToTotal: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router:Router, private http: HttpClient, private totalPriceService: TotalpriceService){}

  ngOnInit(): void {
    this.http.get<cpus[]>('http://localhost:3000/cpu').subscribe((data)=>{
      this.cpu = data;
      this.totalItems = data.length;
      this.setPage(1);
    })
  }

  setPage(page: number): void{
    this.currentPage = page;
    const start = (page - 1)* this.pageSize;
    const end = start + this.pageSize;
    this.displayed = this.cpu.slice(start, end);
  }

  onPageChange(page: number): void{
        this.setPage(page);
      }

  get totalPages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  addToTotal(cpu:cpus):void{
    this.totalPriceService.updateTotalPrice(cpu.price*100);
    this.totalPriceService.updateSelectedComponent('cpu',cpu);
  }
}
