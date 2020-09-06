import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/Professor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar,
         MatSnackBarHorizontalPosition,
         MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-professor-detalhe',
  templateUrl: './professor-detalhe.component.html',
  styleUrls: ['./professor-detalhe.component.scss']
})
export class ProfessorDetalheComponent implements OnInit {

  public professorForm: FormGroup;

  constructor(public professorService: ProfessorService,
              private snackBar: MatSnackBar,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validandoProfessor();
  }

  validandoProfessor(): void {
    this.professorForm = this.fb.group({
      Registro: ['', [Validators.required]],
      Nome: ['', Validators.required],
      Sobrenome: ['', Validators.required],
      Telefone: ['', Validators.required],
      DataIni: [''],
      Ativo: ['0', Validators.required]
    });
  }

  registrarProfessor(): void {
    console.log(this.professorForm.value);
    this.professorService.post({
      Registro: this.professorForm.value.Registro,
      Nome: this.professorForm.value.Nome,
      Sobrenome: this.professorForm.value.Sobrenome,
      Telefone: this.professorForm.value.Telefone,
      DataIni: this.professorForm.value.DataIni,
      Ativo: this.professorForm.value.Ativo
    });
    this.openSnackBar('Salvo com Sucesso', 'Fechar');
  }

  limparProfessor(): void {
    this.professorForm.reset();
    this.openSnackBar('Formulário foi limpo', 'Fechar');
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
