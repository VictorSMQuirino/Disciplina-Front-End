import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelosCategoriaComponent } from './components/modelos-categoria/modelos-categoria.component';
import { CaracteristicasModeloComponent } from './components/caracteristicas-modelo/caracteristicas-modelo.component';
import { TabelaVeiculosComponent } from './components/tabela-veiculos/tabela-veiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelosCategoriaComponent,
    CaracteristicasModeloComponent,
    TabelaVeiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
