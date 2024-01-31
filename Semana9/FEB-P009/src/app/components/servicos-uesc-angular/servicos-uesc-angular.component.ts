import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos-uesc-angular',
  templateUrl: './servicos-uesc-angular.component.html',
  styleUrl: './servicos-uesc-angular.component.css'
})
export class ServicosUescAngularComponent {
  constructor() {
    let buscaInformacoesClimaticas = new Promise((resolve, reject) => {
      fetch('https://api.open-meteo.com/v1/forecast?latitude=-14.7967616&longitude=-39.175962717&hourly=temperature_2m,weather_code,temperature_80m&timezone=America%2FSao_Paulo')
      .then(response => {
         if(response.ok){
            return response.json();
         } else {
            throw new Error(response.statusText);
         }
      })
      .then(data => {
         resolve(data);
      }).catch(error => reject(error));
   });

   buscaInformacoesClimaticas.then(data => {
    try {
       const json = JSON.stringify(data);
       const resultado = JSON.parse(json);
 
       const temperatura = document.getElementById('temperatura');
       const elevacao = document.getElementById('elevacao');
       const horario = document.getElementById('horario');
 
       if(temperatura) {
          temperatura.innerHTML = 'Temperatura: ' + resultado.hourly.temperature_2m[1] + 'ºC';
       }
       if(elevacao) {
          elevacao.innerHTML = 'Elevacao: ' + resultado.elevation;
       }
       if(horario) {
          horario.innerHTML = 'Horario: ' + resultado.hourly.time[0];
       }
    }
    catch(error){console.log(error);}
    }).catch(error => console.log(error));
 
  }
}
