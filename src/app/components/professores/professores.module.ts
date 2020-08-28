import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProfessoresComponent } from './professores.component';
import { ProfessorDetalheComponent } from './professor-detalhe/professor-detalhe.component';
import { ProfessorListaComponent } from './professor-lista/professor-lista.component';

import { ProfessorService } from '../../services/Professor.service';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProfessoresComponent,
    ProfessorDetalheComponent,
    ProfessorListaComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    ProfessorService
  ]
})
export class ProfessoresModule { }
