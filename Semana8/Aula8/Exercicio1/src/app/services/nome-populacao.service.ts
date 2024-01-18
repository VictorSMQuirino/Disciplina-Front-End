import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NomePopulacaoService {
  private API_URL = 'https://restcountries.com/v3.1/all';

  constructor(private httpClient: HttpClient) { }

  getNomePopulacao(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }
}
