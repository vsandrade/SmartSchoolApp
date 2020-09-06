import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';

import { AlunoService } from '../../services/aluno.service';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoDetalheComponent,
    AlunoListaComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    AlunoService
  ]
})
export class AlunosModule { }
