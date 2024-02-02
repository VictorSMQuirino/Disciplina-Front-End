import { Component } from '@angular/core';
import { EmitirNumerosService } from '../../services/emitir-numeros.service';

@Component({
  selector: 'app-lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrl: './lista-numeros.component.css'
})
export class ListaNumerosComponent {
  lista: number[] = [];

  constructor(private servico: EmitirNumerosService) {}

  getNumeros(){
    this.servico.emitirNumeros().subscribe(numero => {
      this.lista.push(numero);
    })
  }
}
