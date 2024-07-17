import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { casefan } from '../component';
import { TotalpriceService } from '../totalprice.service';

@Component({
  selector: 'app-casefan',
  templateUrl: './casefan.component.html',
  styleUrl: './casefan.component.css'
})
export class CasefanComponent implements OnInit {

  caseFan : casefan[] =[];
displayed : casefan[] = [];
currentPage:number = 1;
pageSize: number = 12;
  totalItems: number = 0;

  constructor(private router:Router, private http: HttpClient, private totalPriceService: TotalpriceService){}

  ngOnInit(): void {
    this.http.get<casefan[]>('http://localhost:3000/casefan').subscribe((data)=>{
      this.caseFan = data;
      this.totalItems = data.length;
      this.setPage(1);
    })
  }

  setPage(page: number): void{
    this.currentPage = page;
    const start = (page - 1)* this.pageSize;
    const end = start + this.pageSize;
    this.displayed = this.caseFan.slice(start, end);
  }

  onPageChange(page: number): void{
        this.setPage(page);
      }

  get totalPages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  addToTotal(casefan: casefan): void {
    this.totalPriceService.updateTotalPrice(casefan.price*100);
    this.totalPriceService.updateSelectedComponent('casefan', casefan)
  }

}
