import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cpus } from '../../component';

@Injectable({
  providedIn: 'root'
})
export class CpuService {

  @Output() change: EventEmitter<cpus> = new EventEmitter<cpus>();

  private apiUrl = 'http://localhost:3000/cpu';

  constructor(private http: HttpClient) { }

  getCpuName(): Observable<cpus> {
    return this.http.get<cpus>(this.apiUrl);
  }
}
