import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessoresComponent } from './components/professores/professores.component';
import { AlunosComponent } from './components/alunos/alunos.component';
import { ProfessorDetalheComponent } from './components/professores/professor-detalhe/professor-detalhe.component';
import { ProfessorListaComponent } from './components/professores/professor-lista/professor-lista.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlunoDetalheComponent } from './components/alunos/aluno-detalhe/aluno-detalhe.component';
import { AlunoListaComponent } from './components/alunos/aluno-lista/aluno-lista.component';
import { DisciplinasComponent } from './components/disciplinas/disciplinas.component';
import { DisciplinaDetalheComponent } from './components/disciplinas/disciplina-detalhe/disciplina-detalhe.component';
import { DisciplinaListaComponent } from './components/disciplinas/disciplina-lista/disciplina-lista.component';


const routes: Routes = [
  {
    path: 'professores', component: ProfessoresComponent,
    children: [
      { path: 'detalhe', component: ProfessorDetalheComponent },
      { path: 'detalhe/:id', component: ProfessorDetalheComponent },
      { path: 'lista', component: ProfessorListaComponent },
    ]
  },
  {
    path: 'alunos', component: AlunosComponent,
    children: [
      { path: 'detalhe', component: AlunoDetalheComponent },
      { path: 'detalhe/:id', component: AlunoDetalheComponent },
      { path: 'lista', component: AlunoListaComponent },
    ]
  },
  {
    path: 'disciplinas', component: DisciplinasComponent,
    children: [
      { path: 'detalhe', component: DisciplinaDetalheComponent },
      { path: 'detalhe/:id', component: DisciplinaDetalheComponent },
      { path: 'lista', component: DisciplinaListaComponent },
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
