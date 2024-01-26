import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias-uesc-angular',
  templateUrl: './noticias-uesc-angular.component.html',
  styleUrl: './noticias-uesc-angular.component.css'
})
export class NoticiasUescAngularComponent {
  constructor() {
    let buscaInformacoesAcademicas = new Promise((resolve, reject) => {
      fetch('https://newsapi.org/v2/everything?q=academic&language=pt&apiKey=6ef152798d0a4e74b1612df7faad4def')
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

   buscaInformacoesAcademicas.then(data => {
    try {
       const json = JSON.stringify(data);
       const resultados = JSON.parse(json);
 
       for(let i = 1; i <= 3; i++){
          const tituloNoticia = document.getElementById(`titulo-noticia-${i}`);
          const contNoticia = document.getElementById(`conteudo-noticia-${i}`);
          if(tituloNoticia){
             tituloNoticia.innerHTML = resultados.articles[i - 1].title;
          }
          if(contNoticia){
             contNoticia.innerHTML = resultados.articles[i - 1].description;
          }
       }
    }
    catch(error){
       console.log(error);
    }
    }).catch(error => console.log(error));
  }
}
