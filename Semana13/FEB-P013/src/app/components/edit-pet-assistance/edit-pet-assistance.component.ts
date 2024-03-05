import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet-assistance',
  templateUrl: './edit-pet-assistance.component.html',
  styleUrl: './edit-pet-assistance.component.css'
})
export class EditPetAssistanceComponent implements OnInit {
  
  petAssistanceForm!: FormGroup;
  private petAssistanceId: string = '';
  
  constructor(private formBuilder: FormBuilder, private dbService: DatabaseService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.petAssistanceForm = this.formBuilder.group({
      PetName: ['', Validators.required],
      PetBreed: ['', Validators.required],
      TutorName: ['', Validators.required],
      PetAge: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[0-9]+$/)
      ])],
      Hour: ['', Validators.required]
    });
    this.petAssistanceId = this.route.snapshot.paramMap.get('id')!;
    this.dbService.getPetAssistance(this.petAssistanceId).subscribe(response => {
      this.petAssistanceForm.setValue(response);
    });
  }
  
  submitPetAssistanceForm() {
    this.dbService.putPetAssistance(this.petAssistanceId, this.petAssistanceForm.value).subscribe(response => {
      if(response.status == 200) {
        setTimeout(() => {
          this.router.navigate(['listar']);
        }, 1000);
      }
    });
  }
}
