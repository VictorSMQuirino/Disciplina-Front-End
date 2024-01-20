import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ListaCategoriasComponent } from './components/lista-categorias/lista-categorias.component';
import { ModelosCategoriaComponent } from './components/modelos-categoria/modelos-categoria.component';
import { CaracteristicasModeloComponent } from './components/caracteristicas-modelo/caracteristicas-modelo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCategoriasComponent,
    ModelosCategoriaComponent,
    CaracteristicasModeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
