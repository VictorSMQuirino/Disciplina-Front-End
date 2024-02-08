import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'FEB-P010';

  jsonData: any;

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.getJsonData();
  }

  getJsonData(){
    this.http.get('assets/veiculos.json').subscribe((data) => {
      this.jsonData = data;
    })
  }
}
