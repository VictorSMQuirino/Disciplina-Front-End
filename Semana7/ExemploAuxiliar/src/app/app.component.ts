import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  numeroDeTarefas: number = 3;
  tarefas_appComponents = ['Comprar pão', 'ir ao dentista', 'ir ao supermercado'];

  @ViewChild('teste') titulo!:  ElementRef<any>;

  onTarefaAdicionada(todo: string) {
    this.tarefas_appComponents.push(todo);
    this.numeroDeTarefas++;

    //mudar o do h1
    this.titulo.nativeElement.innerText = "Numero de Tarefas (" + this.numeroDeTarefas + ")";

  }
}

