import { PetFormComponent } from './components/pet-form/pet-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetAssistanceListComponent } from './components/pet-assistance-list/pet-assistance-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cadastrar', component: PetFormComponent},
  {path: 'listar', component: PetAssistanceListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
