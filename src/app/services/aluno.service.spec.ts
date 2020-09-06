/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlunoService } from './Aluno.service';

describe('Service: Alunos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunoService]
    });
  });

  it('should ...', inject([AlunoService], (service: AlunoService) => {
    expect(service).toBeTruthy();
  }));
});
