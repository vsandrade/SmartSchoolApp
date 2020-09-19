import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProfessoresModule } from './components/professores/professores.module';
import { AlunosModule } from './components/alunos/alunos.module';
import { DisciplinasModule } from './components/disciplinas/disciplinas.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    ProfessoresModule,
    AlunosModule,
    DisciplinasModule,
    DashboardModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
