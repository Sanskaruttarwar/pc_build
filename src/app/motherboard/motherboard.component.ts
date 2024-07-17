import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { motherboard } from '../component';
import { TotalpriceService } from '../totalprice.service';

@Component({
  selector: 'app-motherboard',
  templateUrl: './motherboard.component.html',
  styleUrl: './motherboard.component.css'
})
export class MotherboardComponent implements OnInit{


  motherboard :  motherboard[] =[];
displayedCups : motherboard[] = [];
currentPage:number = 1;
pageSize: number = 12;
  totalItems: number = 0;

  constructor(private http:HttpClient, private router:Router, private totalPriceService: TotalpriceService){}

  ngOnInit(): void {
    this.http.get<motherboard[]>('http://localhost:3000/motherboard').subscribe((data)=>{
      this.motherboard = data;
      this.totalItems = data.length;
      this.setPage(1);
    })
  }

  setPage(page: number): void{
    this.currentPage = page;
    const start = (page - 1)* this.pageSize;
    const end = start + this.pageSize;
    this.displayedCups = this.motherboard.slice(start, end);
  }

  onPageChange(page: number): void{
    this.setPage(page);
  }

get totalPages(): number[] {
  const totalPages = Math.ceil(this.totalItems / this.pageSize);
  return Array(totalPages).fill(0).map((x, i) => i + 1);
}

addToTotal(motherboard : motherboard): void {
  this.totalPriceService.updateTotalPrice(motherboard.price * 100 );
  this.totalPriceService.updateSelectedComponent('motherboard', motherboard);
}



}
