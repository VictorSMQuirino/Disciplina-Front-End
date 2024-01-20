import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-modelo',
  templateUrl: './caracteristicas-modelo.component.html',
  styleUrl: './caracteristicas-modelo.component.css'
})
export class CaracteristicasModeloComponent {
  @Input() modelo: any;
}
