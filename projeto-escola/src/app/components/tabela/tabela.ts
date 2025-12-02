import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { IAluno } from '../../interfaces/IAluno';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css',
})
export class Tabela {
  @Output() excluir: EventEmitter<number> = new EventEmitter();

  @Input() alunos: IAluno[] = [];

  @Input() titulo: string = '';

  public excluirAluno(matricula: number): void {
    this.excluir.emit(matricula);
  }

}
