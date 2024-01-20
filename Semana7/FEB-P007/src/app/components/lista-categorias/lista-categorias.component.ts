import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrl: './lista-categorias.component.css',
})
export class ListaCategoriasComponent implements OnInit {

  @Input() json: any;
  @Output() jsonCategoria = new EventEmitter<any>();
  @Output() nomeCategoria = new EventEmitter<string>();

  public emitirJsonCategoria(categoria: string): void{
    if(categoria == "Avioes"){
      this.jsonCategoria.emit(this.json.Avioes);
      this.jsonCategoria = this.json.Avioes;
    }
    else if(categoria == "Carros"){
      this.jsonCategoria.emit(this.json.Carros);
      this.jsonCategoria = this.json.Carros;
    }
    else if(categoria == "Barcos"){
      this.jsonCategoria.emit(this.json.Barcos);
      this.jsonCategoria = this.json.Barcos;
    }
  }

  get categorias(){
    return Object.keys(this.json);
  }

  ngOnInit(): void {
      
  }
}
