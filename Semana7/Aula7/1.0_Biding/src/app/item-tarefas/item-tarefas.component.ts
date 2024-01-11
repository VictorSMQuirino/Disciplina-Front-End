import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-tarefas',
  templateUrl: './item-tarefas.component.html',
  styleUrls: ['./item-tarefas.component.css']
})
export class ItemTarefasComponent {
  @Input() itemTarefa: string = '';
}
