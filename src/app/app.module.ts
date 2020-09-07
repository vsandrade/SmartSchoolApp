import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProfessoresModule } from './components/professores/professores.module';
import { AlunosModule } from './components/alunos/alunos.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
  ],
  imports: [
    ProfessoresModule,
    AlunosModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
