import { NgModule } from '@angular/core';

import { ProfessoresComponent } from './professores.component';
import { ProfessorDetalheComponent } from './professor-detalhe/professor-detalhe.component';
import { ProfessorListaComponent } from './professor-lista/professor-lista.component';

import { ProfessorService } from '../../services/Professor.service';

import { SharedModule } from '../../shared/shared.module';
import { HeaderTitleComponent } from 'src/app/shared/components/header-title/header-title.component';

@NgModule({
  declarations: [
    ProfessoresComponent,
    ProfessorDetalheComponent,
    ProfessorListaComponent,
    HeaderTitleComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    ProfessorService
  ]
})
export class ProfessoresModule { }
