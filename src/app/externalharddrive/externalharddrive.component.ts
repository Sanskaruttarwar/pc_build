import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { externalharddrive } from '../component';
import { TotalpriceService } from '../totalprice.service';

@Component({
  selector: 'app-externalharddrive',
  templateUrl: './externalharddrive.component.html',
  styleUrl: './externalharddrive.component.css'
})
export class ExternalharddriveComponent {


  external : externalharddrive[] =[];
  displayed : externalharddrive[] = [];
  currentPage:number = 1;
  pageSize: number = 12;
    totalItems: number = 0;
  
    constructor(private router:Router, private http: HttpClient, private totalPriceService: TotalpriceService){}
  
    ngOnInit(): void {
      this.http.get<externalharddrive[]>('http://localhost:3000/externalharddrive').subscribe((data)=>{
        this.external = data;
        this.totalItems = data.length;
        this.setPage(1);
      })
    }
  
    setPage(page: number): void{
      this.currentPage = page;
      const start = (page - 1)* this.pageSize;
      const end = start + this.pageSize;
      this.displayed = this.external.slice(start, end);
    }
  
    onPageChange(page: number): void{
          this.setPage(page);
        }
  
    get totalPages(): number[] {
      const totalPages = Math.ceil(this.totalItems / this.pageSize);
      return Array(totalPages).fill(0).map((x, i) => i + 1);
    }

    addToTotal(external:externalharddrive): void {
      this.totalPriceService.updateTotalPrice(external.price);
      this.totalPriceService.updateSelectedComponent('external',external);
    }


}
