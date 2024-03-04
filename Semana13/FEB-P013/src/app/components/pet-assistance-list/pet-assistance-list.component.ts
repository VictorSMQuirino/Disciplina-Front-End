import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { PetAssistance } from '../../models/petAssistance.model';

@Component({
  selector: 'app-pet-assistance-list',
  templateUrl: './pet-assistance-list.component.html',
  styleUrl: './pet-assistance-list.component.css'
})
export class PetAssistanceListComponent implements OnInit {

  petAssistances: PetAssistance[] = [];

  constructor(private dbService: DatabaseService) { }
  
  ngOnInit(): void {
    this.dbService.getPetAssistances().subscribe(response => {
      // console.log(response);
      this.petAssistances = response;
    })
  }

}
