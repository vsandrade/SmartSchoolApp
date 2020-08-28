import { Professor } from './Professor';
import { Curso } from './Curso';
import { Aluno } from './Aluno';

export class Disciplina {
  public d: number;
  public Nome: string;
  public CargaHoraria: number;
  public PrerequisitoId?: number;
  public Prerequisito: Disciplina;
  public ProfessorId: number;
  public Professor: Professor;
  public CursoId: number;
  public Curso: Curso;
  public Alunos: Aluno[];
}
