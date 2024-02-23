import { Component } from '@angular/core';
import { ServicoBancoService } from '../../services/servico-banco.service';

@Component({
  selector: 'app-listar-atendimentos',
  templateUrl: './listar-atendimentos.component.html',
  styleUrl: './listar-atendimentos.component.css'
})
export class ListarAtendimentosComponent {

  

  constructor(private service: ServicoBancoService) { }
}
