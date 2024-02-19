import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObterInformacoesVeiculosService {

  private subject = new Subject<any>();
  observable = this.subject.asObservable();
  private veiculos: string = '/assets/veiculos.json';
  private json: any;

  constructor(private http: HttpClient) { }

  loadJson(){
    this.http.get(this.veiculos).subscribe(json => {
      this.json = json;
    })
  }

  loadJsonCategoria(categoria: string) {
    if(this.json && this.json[categoria]) {
      this.subject.next(this.json[categoria]);
    }
  }

  loadModelo(categoria: string, modelo: string) {
    if(this.json && this.json[categoria]) {
      let item = this.json[categoria].find((i: any) => i.Name === modelo);
      if(item) {
        this.subject.next(item);
      }
    }
  }
}
