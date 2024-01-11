import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { ItemTarefasComponent } from './item-tarefas/item-tarefas.component';
import { DestaqueDirective } from './destaque.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    ItemTarefasComponent,
    DestaqueDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
