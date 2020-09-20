import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-disciplina-detalhe',
  templateUrl: './disciplina-detalhe.component.html',
  styleUrls: ['./disciplina-detalhe.component.scss']
})
export class DisciplinaDetalheComponent implements OnInit {

  public disciplinaForm: FormGroup;

  constructor(public disciplinaService: DisciplinaService,
              private snackBar: MatSnackBar,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registrarDisciplina(): void {

  }

  limparDisciplina(): void {

  }

}
