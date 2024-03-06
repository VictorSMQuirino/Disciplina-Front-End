import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { PetAssistanceListComponent } from './components/pet-assistance-list/pet-assistance-list.component';
import { EditPetAssistanceComponent } from './components/edit-pet-assistance/edit-pet-assistance.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastrar', component: PetFormComponent},
  {path: 'listar', component: PetAssistanceListComponent},
  {path: 'editar/:id', component: EditPetAssistanceComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
