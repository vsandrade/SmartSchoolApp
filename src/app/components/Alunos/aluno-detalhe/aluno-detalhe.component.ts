import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlunoService } from 'src/app/services/aluno.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Aluno } from 'src/app/models/Aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {

  public alunoForm: FormGroup;

  constructor(public alunoService: AlunoService,
              private snackBar: MatSnackBar,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validandoProfessor();
  }

  validandoProfessor(): void {
    this.alunoForm = this.fb.group({
      Matricula: ['', [Validators.required]],
      Nome: ['', Validators.required],
      Sobrenome: ['', Validators.required],
      Telefone: ['', Validators.required],
      DataNasc: [''],
      Ativo: ['0', Validators.required]
    });
  }

  registrarAluno(): void {
    console.log(this.alunoForm.value);
    this.alunoService.post({
      Matricula: this.alunoForm.value.Matricula,
      Nome: this.alunoForm.value.Nome,
      Sobrenome: this.alunoForm.value.Sobrenome,
      Telefone: this.alunoForm.value.Telefone,
      DataNasc: this.alunoForm.value.DataNasc,
      Ativo: this.alunoForm.value.Ativo
    } as Aluno);
    this.openSnackBar('Salvo com Sucesso', 'Fechar');
  }

  limparAluno(): void {

  }

  openSnackBar(message: string, action: string): void {
    const horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    const verticalPosition: MatSnackBarVerticalPosition = 'top';

    this.snackBar.open(message, action, {
      duration: 4000,
      horizontalPosition,
      verticalPosition,
    });
  }

}
