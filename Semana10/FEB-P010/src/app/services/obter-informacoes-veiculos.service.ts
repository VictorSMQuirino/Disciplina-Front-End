import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObterInformacoesVeiculosService {

  private subjectVeiculos = new Subject<any>();
  private subjectVeiculo = new Subject<any>();
  private subjectVeiculosSelecionados = new Subject<any>();
  observableVeiculos = this.subjectVeiculos.asObservable();
  observableVeiculo = this.subjectVeiculo.asObservable();
  obeservableVeiculosSelecionados = this.subjectVeiculosSelecionados.asObservable();
  private veiculos: string = '/assets/veiculos.json';
  private json: any;
  private listaVeiculos: any[] = [];

  constructor(private http: HttpClient) { }

  loadJson(){
    this.http.get(this.veiculos).subscribe(json => {
      this.json = json;
    })
  }

  loadJsonCategoria(categoria: string) {
    if(this.json && this.json[categoria]) {
      this.subjectVeiculos.next(this.json[categoria]);
    }
  }

  loadModelo(categoria: string, modelo: string) {
    if(this.json && this.json[categoria]) {
      let item = this.json[categoria].find((i: any) => i.Name === modelo);
      if(item) {
        this.subjectVeiculo.next(item);
      }
    }
  }

  addVeiculo(veiculo: any): void {
    this.listaVeiculos.push(veiculo);
  }

  loadLista(): void {
    if(this.json) {
      this.subjectVeiculosSelecionados.next(this.listaVeiculos);
    }
  }
}
