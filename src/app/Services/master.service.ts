import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MasterService {
  url: string = '';

  constructor(private http: HttpClient) {
    this.url = environment.UrlBase;
  }

  getAll(base: string): Observable<any> {
    return this.http.get<any>(this.url + base);
  }

  add(base: string, data: any): Observable<any> {
    return this.http.post<any>(this.url + base, data);
  }
}
