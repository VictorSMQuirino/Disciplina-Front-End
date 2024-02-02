import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitirNumerosService {

  constructor() { }

  emitirNumeros(): Observable<any> {
    const observable = new Observable((subscriber) => {
      for(let i = 1; i <= 100; i++){
        setTimeout(() => {
          subscriber.next(i);
        }, 1000);
        subscriber.complete();
      }
    })
    return observable;
  }
}
