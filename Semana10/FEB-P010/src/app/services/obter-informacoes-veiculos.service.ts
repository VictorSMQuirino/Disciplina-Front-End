import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObterInformacoesVeiculosService {

  constructor(private http: HttpClient) { }

  getJson(): Observable<string>{
    return this.http.get<string>('assets/veiculos.json');
  }
}
