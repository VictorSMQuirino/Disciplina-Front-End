import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultados-pesquisa-wiki',
  templateUrl: './resultados-pesquisa-wiki.component.html',
  styleUrl: './resultados-pesquisa-wiki.component.css'
})
export class ResultadosPesquisaWikiComponent {
  @Input() conteudoPesquisado: string = '';
  @Input() resultadoPesquisa: any;
  @Input() titulo: string = '';
}
