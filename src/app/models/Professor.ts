import { Disciplina } from './Disciplina';

export class Professor {
  public Id?: number;
  public Registro: number;
  public Nome: string;
  public Sobrenome: string;
  public Telefone: string;
  public DataIni: Date;
  public DataFim?: Date;
  public Ativo: boolean;
  public Disciplinas?: Disciplina[];
}
