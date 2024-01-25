import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultados-pesquisa',
  templateUrl: './resultados-pesquisa.component.html',
  styleUrl: './resultados-pesquisa.component.css'
})
export class ResultadosPesquisaComponent {
  @Input() conteudoPesquisado: string = '';
  @Input() resultadoPesquisa: any;
  @Input() titulo: string = '';
}
