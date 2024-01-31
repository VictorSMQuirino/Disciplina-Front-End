import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaWikiComponent } from './components/pesquisa-wiki/pesquisa-wiki.component';
import { ResultadosPesquisaWikiComponent } from './components/resultados-pesquisa-wiki/resultados-pesquisa-wiki.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { UescAngularComponent } from './components/uesc-angular/uesc-angular.component';
import { MenuUescAngularComponent } from './components/menu-uesc-angular/menu-uesc-angular.component';
import { NoticiasUescAngularComponent } from './components/noticias-uesc-angular/noticias-uesc-angular.component';
import { DestaqueUescAngularComponent } from './components/destaque-uesc-angular/destaque-uesc-angular.component';
import { ServicosUescAngularComponent } from './components/servicos-uesc-angular/servicos-uesc-angular.component';
import { ResultadosUescAngularComponent } from './components/resultados-uesc-angular/resultados-uesc-angular.component';
import { AgenciaTuristicaComponent } from './components/agencia-turistica/agencia-turistica.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaWikiComponent,
    ResultadosPesquisaWikiComponent,
    UescAngularComponent,
    MenuUescAngularComponent,
    NoticiasUescAngularComponent,
    DestaqueUescAngularComponent,
    ServicosUescAngularComponent,
    ResultadosUescAngularComponent,
    AgenciaTuristicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
