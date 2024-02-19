import {Component, OnInit} from '@angular/core';
import {ObterInformacoesVeiculosService} from "./services/obter-informacoes-veiculos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'FEB-P010';
  json: any;
  categoria: string = '';
  nomeModelo: string = '';

  constructor(private service: ObterInformacoesVeiculosService) { }

  ngOnInit(): void {
    this.service.loadJson();
  }

  setCategory(categoria: string): void {
    this.categoria = categoria;
  }

  setnomeModelo(nomeModelo: string): void {
    this.nomeModelo = nomeModelo;
  }
}
