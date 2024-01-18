import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrl: './lista-categorias.component.css',
})
export class ListaCategoriasComponent {

  @Output() nomeCategoria = new EventEmitter<string>();

  public selecionarCategoria(categoria: string): void {
    this.nomeCategoria.emit(categoria);
  }
}
