import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ObterInformacoesVeiculosService } from '../../services/obter-informacoes-veiculos.service';

@Component({
  selector: 'app-modelos-categoria',
  templateUrl: './modelos-categoria.component.html',
  styleUrl: './modelos-categoria.component.css'
})
export class ModelosCategoriaComponent implements OnInit{
  @Input() nomeCategoria: string = '';
  json: any;
  @Output() nomeModelo = new EventEmitter<string>();

  constructor(private service: ObterInformacoesVeiculosService) { }

  ngOnInit(): void {
    this.service.observable.subscribe(json => {
      this.json = json;
    });
    this.service.loadJsonCategoria(this.nomeCategoria);
  }

  emitModelo(modelo: string){
    this.nomeModelo.emit(modelo);
  }
}
