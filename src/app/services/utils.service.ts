import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  _emailtoken  : BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { 
    this._emailtoken = JSON.parse(localStorage.getItem('emailtoken')!);

  }

   emailtoken(): Observable<string> {
    
    return this._emailtoken.asObservable();
  }


}
