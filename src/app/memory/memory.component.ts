import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { memory } from '../component';
import { TotalpriceService } from '../totalprice.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.css'
})
export class MemoryComponent implements OnInit{
  Memory : memory[] =[];
displayed : memory[] = [];
currentPage:number = 1;
pageSize: number = 12;
  totalItems: number = 0;

  constructor(private router:Router, private http: HttpClient, private totalPriceService: TotalpriceService){}

  ngOnInit(): void {
    this.http.get<memory[]>('http://localhost:3000/memory').subscribe((data)=>{
      this.Memory = data;
      this.totalItems = data.length;
      this.setPage(1);
    })
  }

  setPage(page: number): void{
    this.currentPage = page;
    const start = (page - 1)* this.pageSize;
    const end = start + this.pageSize;
    this.displayed = this.Memory.slice(start, end);
  }

  onPageChange(page: number): void{
        this.setPage(page);
      }

  get totalPages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  addToTotal(memory: memory): void {
    this.totalPriceService.updateTotalPrice(memory.price * 100);
    this.totalPriceService.updateSelectedComponent('memory',memory);
  }

}
