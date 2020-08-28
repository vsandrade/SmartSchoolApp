/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlunosService } from './Alunos.service';

describe('Service: Alunos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunosService]
    });
  });

  it('should ...', inject([AlunosService], (service: AlunosService) => {
    expect(service).toBeTruthy();
  }));
});
