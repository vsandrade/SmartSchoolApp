import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlunoService } from 'src/app/services/aluno.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {

  public AlunoForm: FormGroup;

  constructor(public alunoService: AlunoService,
              private snackBar: MatSnackBar,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registrarAluno(): void {

  }

  limparAluno(): void {
    
  }

}
