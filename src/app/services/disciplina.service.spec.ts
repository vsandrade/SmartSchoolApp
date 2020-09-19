/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DisciplinaService } from './disciplina.service';

describe('Service: Disciplina', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisciplinaService]
    });
  });

  it('should ...', inject([DisciplinaService], (service: DisciplinaService) => {
    expect(service).toBeTruthy();
  }));
});
