import { Component, signal } from '@angular/core';
import { IAluno } from './interfaces/IAluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  titulo: string = 'Sistema Alunos Proway';
  exibicao: string = 'lista';
  filtro: string = 'todos';

  escola = {
    nome: 'Proway',
    cidade: 'Blumenau'
  }

  listaAlunos: IAluno[] = [
    {
      nome: 'Harry',
      matricula: 1111,
      curso: 'Frontend',
      email: 'harry@gmail.com',
      materias: ['HTML', 'CSS', 'Typescript'],
      imagem: '../assets/usuario.png',
      situacao: true
    },
    {
      nome: 'Hermione',
      matricula: 2222,
      curso: 'Backend',
      email: 'hermione@gmail.com',
      materias: ['Java', 'PostgreSQL'],
      imagem: '../assets/usuario2.png',
      situacao: false
    },
    {
      nome: 'Ronald',
      matricula: 3333,
      curso: 'Banco de Dados',
      email: 'ronald@gmail.com',
      materias: ['MySql', 'Oracle'],
      imagem: '../assets/usuario3.png',
      situacao: true
    },
    {
      nome: 'Gina',
      matricula: 4444,
      curso: 'Angular',
      email: 'gina@gmail.com',
      materias: ['MySql', 'Oracle'],
      imagem: '../assets/usuario4.png',
      situacao: false
    }
  ]

  listaAlunosFiltro: IAluno[] = this.listaAlunos;

  alternarExibicao(): void {
    this.exibicao = this.exibicao === 'lista' ? 'cards' : 'lista';
  }

  filtrarAprovados(): void {
    const listaAprovados: IAluno[] = this.listaAlunos.filter(aluno => aluno.situacao === true);
    this.listaAlunosFiltro = listaAprovados;
  }

  filtrarReprovados(): void {
    const listaReprovados: IAluno[] = this.listaAlunos.filter(aluno => aluno.situacao === false);
    this.listaAlunosFiltro = listaReprovados;
  }

  filtrarTodos(): void {
    this.listaAlunosFiltro = this.listaAlunos;
  }

  onExcluir(matricula: number): void {
    const index: number = this.listaAlunos.findIndex(aluno => aluno.matricula === matricula);
    this.listaAlunos.splice(index, 1);
  }

  
}
