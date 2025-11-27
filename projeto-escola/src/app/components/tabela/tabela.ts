import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css',
})
export class Tabela {
  @Input() alunos: any[] = [];

}
