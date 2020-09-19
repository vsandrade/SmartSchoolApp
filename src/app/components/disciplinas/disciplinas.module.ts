import { NgModule } from '@angular/core';

import { DisciplinasComponent } from './disciplinas.component';
import { DisciplinaDetalheComponent } from './disciplina-detalhe/disciplina-detalhe.component';
import { DisciplinaListaComponent } from './disciplina-lista/disciplina-lista.component';

import { DisciplinaService } from '../../services/disciplina.service';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DisciplinasComponent,
    DisciplinaDetalheComponent,
    DisciplinaListaComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    DisciplinaService
  ]
})
export class DisciplinasModule { }
