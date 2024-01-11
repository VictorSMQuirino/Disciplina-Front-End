import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {


  @Input() listaTarefas_listaTarefasComponent: string[] = [];


  //@Output() tarefaAdicionada = new EventEmitter<string>();
  //com alias tarefaFoiCriada
  @Output('tarefaFoiCriada') tarefaAdicionada = new EventEmitter<string>();

  addTarefa(todo: string) {
    todo = "*---->" + todo;
    console.log("metodo chamado no filho")
    this.tarefaAdicionada.emit(todo);
  }


 }

