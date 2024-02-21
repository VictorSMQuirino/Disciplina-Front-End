import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ObterInformacoesVeiculosService } from '../../services/obter-informacoes-veiculos.service';

@Component({
  selector: 'app-modelos-categoria',
  templateUrl: './modelos-categoria.component.html',
  styleUrl: './modelos-categoria.component.css'
})
export class ModelosCategoriaComponent implements OnInit{
  @Input() nomeCategoria: string = '';
  // json: any;
  @Output() nomeVeiculo = new EventEmitter<string>();
  veiculos: any[] = [];

  constructor(private service: ObterInformacoesVeiculosService) { }

  ngOnInit(): void {
    this.service.observableVeiculos.subscribe(veiculos => {
      this.veiculos = veiculos;
    })
    this.service.loadJsonCategoria(this.nomeCategoria);
  }

  selecionarVeiculo(veiculo: any) {
    this.service.loadModelo(this.nomeCategoria, veiculo.Name);
    this.nomeVeiculo.emit(veiculo.Name);
  }
}
