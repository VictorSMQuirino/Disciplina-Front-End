import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FEB-P007';

  public categoria: string = '';
  public jsonSelecionado: string = '';
  // json = JSON.stringify();

  obterJson(data: any){
    const selectedFile: File = data.target.files[0];
    if(selectedFile) {
      this.lerJson(selectedFile);
    }
  }

  lerJson(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = reader.result as string;
      this.jsonSelecionado = JSON.parse(fileContent);
    }

    // console.log(this.jsonSelecionado);
    for (let item of this.jsonSelecionado) {
      console.log("------->" + item);
    }
  }

  setCategoria(categoria: string) {
    this.categoria = categoria;
  }
}
