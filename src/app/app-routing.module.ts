import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessoresComponent } from './components/professores/professores.component';
import { AlunosComponent } from './components/alunos/alunos.component';


const routes: Routes = [
  { path: '', redirectTo: 'professores', pathMatch: 'full' },
  { path: '**', redirectTo: 'professores', pathMatch: 'full' },
  { path: 'professores', component: ProfessoresComponent },
  { path: 'alunos', component: AlunosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
