import { Disciplina } from './Disciplina';

export class Aluno {
  public Id?: number;
  public Matricula: number;
  public Nome: string;
  public Sobrenome: string;
  public Telefone: string;
  public DataNasc: Date;
  public DataIni: Date;
  public DataFim: Date;
  public Ativo: boolean;
  public Disciplinas: Disciplina[];
}
