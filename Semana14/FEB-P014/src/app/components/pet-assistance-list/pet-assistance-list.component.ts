import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database/database.service';
import { PetAssistance } from '../../models/petAssistance.model';

@Component({
  selector: 'app-pet-assistance-list',
  templateUrl: './pet-assistance-list.component.html',
  styleUrl: './pet-assistance-list.component.css'
})
export class PetAssistanceListComponent implements OnInit {

  petAssistances: PetAssistance[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }
  
  ngOnInit(): void {
    this.dbService.getPetAssistances().subscribe(response => {
      // console.log(response);
      this.petAssistances = response;
    })
  }

  deletePetAssistance(id: string) {
    this.dbService.deletePetAssistance(id).subscribe(response => {
      // console.log(response);
      // this.router.navigate(['listar']);
      alert('Atendimento excluído com sucesso!');
      this.router.navigate(['home']);
    })
  }
}
