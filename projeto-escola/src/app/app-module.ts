import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Student } from './components/student/student';
import { Tabela } from './components/tabela/tabela';
import { FormsAluno } from './components/forms-aluno/forms-aluno';

@NgModule({
  declarations: [
    App,
    Student,
    Tabela,
    FormsAluno
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
