import { Component, Input, input } from '@angular/core';
import { IAluno } from '../../interfaces/IAluno';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css',
})
export class Tabela {
  @Input() alunos: IAluno[] = [];

  @Input() titulo: string = '';

}
