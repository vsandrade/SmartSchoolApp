import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/Professor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-professor-detalhe',
  templateUrl: './professor-detalhe.component.html',
  styleUrls: ['./professor-detalhe.component.scss']
})
export class ProfessorDetalheComponent implements OnInit {

  constructor(public professorService: ProfessorService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    // this.professorService.post({
    //   Registro: form.value.registro,
    //   Nome: form.value.nome,
    //   Sobrenome: form.value.sobrenome,
    //   Telefone: form.value.telefone,
    //   DataIni: form.value.dataIni,
    //   Ativo: form.value.ativo
    // });
  }
}
