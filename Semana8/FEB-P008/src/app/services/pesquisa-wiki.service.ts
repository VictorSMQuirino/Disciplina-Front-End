import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesquisaWikiService {

  private readonly API_URL = '/api';

  constructor(private http: HttpClient) { }

  pesquisarNaWiki(termo: string): Observable<any> {
    const url = `${this.API_URL}?action=query&format=json&prop=info&inprop=url&list=search&srsearch=${termo}`;

    return this.http.get(url);
  }
}
