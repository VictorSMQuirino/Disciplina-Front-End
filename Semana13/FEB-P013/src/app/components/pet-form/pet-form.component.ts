import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrl: './pet-form.component.css'
})
export class PetFormComponent implements OnInit {
  
  petFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.petFormGroup = this.formBuilder.group({
      PetName: ['', Validators.required],
      PetBreed: ['', Validators.required],
      TutorName: ['', Validators.required],
      PetAge: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[0-9]+$/)
      ])],
      Hour: ['', Validators.required]
    });
  }
  
  submitPetAssistanceForm() {
    // console.log("Formulário enviado!");
    console.log(this.petFormGroup.value);
    this.dbService.postPetAssistance(this.petFormGroup.value);
    this.petFormGroup.reset();
  }
}
