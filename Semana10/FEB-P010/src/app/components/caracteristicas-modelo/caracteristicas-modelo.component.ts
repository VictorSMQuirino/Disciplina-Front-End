import { Component, Input, OnInit } from '@angular/core';
import {ObterInformacoesVeiculosService} from "../../services/obter-informacoes-veiculos.service";

@Component({
  selector: 'app-caracteristicas-modelo',
  templateUrl: './caracteristicas-modelo.component.html',
  styleUrl: './caracteristicas-modelo.component.css'
})
export class CaracteristicasModeloComponent implements OnInit {

  veiculo: any;
  @Input() nomeModelo: string = '';
  @Input() categoria: string = '';

  constructor(private service: ObterInformacoesVeiculosService) { }

  ngOnInit(): void {
    this.service.observableVeiculo.subscribe(veiculo => {
      this.veiculo = veiculo;
    });
    this.service.loadModelo(this.categoria, this.nomeModelo);
  }

  pushVeiculo() {
    this.service.addVeiculo(this.veiculo);
  }
}
