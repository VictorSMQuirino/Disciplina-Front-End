import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarAtendimentoComponent } from './components/cadastrar-atendimento/cadastrar-atendimento.component';
import { ListarAtendimentosComponent } from './components/listar-atendimentos/listar-atendimentos.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastrarAtendimentoComponent},
  {path: 'listar', component: ListarAtendimentosComponent},
  {path: '', redirectTo: '/cadastro', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
