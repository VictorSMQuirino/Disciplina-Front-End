import { PesquisaWikiService } from './../../services/pesquisa-wiki.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pesquisa-wiki',
  templateUrl: './pesquisa-wiki.component.html',
  styleUrl: './pesquisa-wiki.component.css'
})
export class PesquisaWikiComponent {
  conteudoInput: string = '';
  resultadoPesquisa: any;
  titulo: string = '';

  constructor(private service: PesquisaWikiService) {}

  realizarBusca() {
    this.service.pesquisarNaWiki(this.conteudoInput).subscribe((data) => {
      this.resultadoPesquisa = data;
      this.titulo = this.conteudoInput;
    });
  }
}
