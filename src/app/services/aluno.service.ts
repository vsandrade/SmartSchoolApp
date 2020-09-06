import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Aluno } from '../models/Aluno';

import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { SharedService } from './shared.service';

@Injectable()
export class AlunoService extends SharedService {

  baseURL = `${environment.mainUrlAPI}aluno`;

  constructor(private http: HttpClient) {
    super();
  }

  alunos$ = this.http.get<Aluno[]>(this.baseURL)
    .pipe(
      catchError(this.handleError)
    );

  getById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.baseURL}/${id}`);
  }

  getByDisciplinaId(id: number): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.baseURL}/ByDisciplina/${id}`);
  }

  post(aluno: Aluno): any {
    return this.http.post(this.baseURL, aluno);
  }

  put(aluno: Aluno): any {
    return this.http.put(`${this.baseURL}/${aluno.Id}`, aluno);
  }

  delete(id: number): any {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
