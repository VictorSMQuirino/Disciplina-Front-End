import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { PetAssistanceListComponent } from './components/pet-assistance-list/pet-assistance-list.component';
import { EditPetAssistanceComponent } from './components/edit-pet-assistance/edit-pet-assistance.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'cadastrar', component: PetFormComponent, canActivate: [AuthGuard]},
  {path: 'listar', component: PetAssistanceListComponent, canActivate: [AuthGuard]},
  {path: 'editar/:id', component: EditPetAssistanceComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
