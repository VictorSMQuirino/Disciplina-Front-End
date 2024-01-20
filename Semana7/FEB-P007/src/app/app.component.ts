import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FEB-P007';

  public categoria: string = '';
  public jsonSelecionado: any;
  public jsonCategoriaSelecionada: any

  obterJson(data: any){
    const selectedFile = data.target.files[0];

    if(selectedFile) {
      this.lerJson(selectedFile);
    }
  }

  private lerJson(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target?.result as string;
      this.converteJson(fileContent);
    }

    reader.readAsText(file);
  }

  private converteJson(content: string) {
    try {
      this.jsonSelecionado = JSON.parse(content);
      console.log(this.jsonSelecionado);
    } catch (error) {
      console.log(error);
    }
  }

  setCategoria(categoria: string) {
    this.categoria = categoria;
    console.log(`Categoria passada: ${this.categoria}`);
  }

  setCategoriaSelecionada(json: any) {
    this.jsonCategoriaSelecionada = json;
  }
}
