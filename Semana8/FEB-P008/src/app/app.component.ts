import { Component } from '@angular/core';
import { PesquisaWikiService } from './services/pesquisa-wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FEB-P008';

  conteudoInput: string = '';
  resultadoPesquisa: any;

  constructor(private service: PesquisaWikiService) {}

  realizarBusca() {
    this.service.pesquisarNaWiki(this.conteudoInput).subscribe((data) => {
      this.resultadoPesquisa = data;
    });
  }
}
