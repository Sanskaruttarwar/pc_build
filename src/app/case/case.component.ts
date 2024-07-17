import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Case } from '../component';
import { TotalpriceService } from '../totalprice.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrl: './case.component.css'
})
export class CaseComponent implements OnInit{
  
  case : Case[] =[];
displayed : Case[] = [];
currentPage:number = 1;
pageSize: number = 12;
  totalItems: number = 0;

  constructor(private router:Router, private http:HttpClient, private totalPriceService: TotalpriceService){}

  ngOnInit(): void {
    this.http.get<Case[]>('http://localhost:3000/case').subscribe((data)=>{
      this.case = data;
      this.totalItems = data.length;
      this.setPage(1);
    })
  }

  setPage(page: number): void{
    this.currentPage = page;
    const start = (page - 1)* this.pageSize;
    const end = start + this.pageSize;
    this.displayed = this.case.slice(start, end);
  }

  onPageChange(page: number): void{
        this.setPage(page);
      }

  get totalPages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  addToTotal(cases :Case): void {
    this.totalPriceService.updateTotalPrice(cases.price * 100);
    this.totalPriceService.updateSelectedComponent('case', cases);
  }

}
