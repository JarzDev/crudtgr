import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiAws: string;


  constructor(private http: HttpClient) {
    this.apiAws = environment.apiAws.api;
   }


   reads(): Observable<any[]> {
    return this.http.get<any[]>(this.apiAws);
  }
}
