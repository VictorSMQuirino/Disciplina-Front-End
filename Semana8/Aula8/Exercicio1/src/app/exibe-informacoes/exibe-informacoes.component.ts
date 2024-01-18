import { NomePopulacaoService } from './../services/nome-populacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibe-informacoes',
  templateUrl: './exibe-informacoes.component.html',
  styleUrl: './exibe-informacoes.component.css'
})
export class ExibeInformacoesComponent implements OnInit {

  countrysData: any;

  constructor(private service: NomePopulacaoService){

  }

  ngOnInit(){
    this.service.getNomePopulacao().subscribe((data) => {
      this.countrysData = data;
    });
  }
}
