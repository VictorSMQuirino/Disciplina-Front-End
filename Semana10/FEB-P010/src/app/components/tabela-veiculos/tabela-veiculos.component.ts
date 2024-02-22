import {Component, OnInit} from '@angular/core';
import {ObterInformacoesVeiculosService} from "../../services/obter-informacoes-veiculos.service";

@Component({
  selector: 'app-tabela-veiculos',
  templateUrl: './tabela-veiculos.component.html',
  styleUrl: './tabela-veiculos.component.css'
})
export class TabelaVeiculosComponent implements OnInit{
  public listaVeiculos: any[] = [];

  constructor(private service: ObterInformacoesVeiculosService) { }

  ngOnInit(): void {
    this.service.obeservableVeiculosSelecionados.subscribe(veiculos => {
      this.listaVeiculos = veiculos;
    });
    this.service.loadLista();
  }
}
