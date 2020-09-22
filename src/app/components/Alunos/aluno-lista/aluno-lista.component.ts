import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/Aluno';

const ELEMENT_DATA: Aluno[] = [
  {
    Id: 1,
    Matricula: 1,
    Nome: 'Hydrogen',
    Sobrenome: '1.0079',
    Telefone: 'H',
    Ativo: true,
    Descricao: `Hydrogen is a chemical element with telefone H and atomic number 1. With a standard
        atomic sobrenome of 1.008, hydrogen is the lightest element on the periodic table.'`
  }, {
    Id: 2,
    Matricula: 2,
    Nome: 'Helium',
    Sobrenome: '4.0026',
    Telefone: 'He',
    Ativo: true,
    Descricao: `Helium is a chemical element with telefone He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, ...`
  }, {
    Id: 3,
    Matricula: 3,
    Nome: 'Lithium',
    Sobrenome: '6.941',
    Telefone: 'Li',
    Ativo: true,
    Descricao: `Lithium is a chemical element with telefone Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the  ...`
  }, {
    Id: 4,
    Matricula: 4,
    Nome: 'Beryllium',
    Sobrenome: '9.0122',
    Telefone: 'Be',
    Ativo: true,
    Descricao: `Beryllium is a chemical element with telefone Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product ...`
  }, {
    Id: 5,
    Matricula: 5,
    Nome: 'Boron',
    Sobrenome: '10.811',
    Telefone: 'B',
    Ativo: true,
    Descricao: `Boron is a chemical element with telefone B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar ...`
  }, {
    Id: 6,
    Matricula: 6,
    Nome: 'Carbon',
    Sobrenome: '12.0107',
    Telefone: 'C',
    Ativo: true,
    Descricao: `Carbon is a chemical element with telefone C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical ...`
  }, {
    Id: 7,
    Matricula: 7,
    Nome: 'Nitrogen',
    Sobrenome: '14.0067',
    Telefone: 'N',
    Ativo: true,
    Descricao: `Nitrogen is a chemical element with telefone N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    Id: 8,
    Matricula: 8,
    Nome: 'Oxygen',
    Sobrenome: '15.9994',
    Telefone: 'O',
    Ativo: true,
    Descricao: `Oxygen is a chemical element with telefone O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, ...`
  }, {
    Id: 9,
    Matricula: 9,
    Nome: 'Fluorine',
    Sobrenome: '18.9984',
    Telefone: 'F',
    Ativo: true,
    Descricao: `Fluorine is a chemical element with telefone F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at ...`
  }, {
    Id: 0,
    Matricula: 10,
    Nome: 'Neon',
    Sobrenome: '20.1797',
    Telefone: 'Ne',
    Ativo: true,
    Descricao: `Neon is a chemical element with telefone Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, ...`
  },
];

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
})
export class AlunoListaComponent implements OnInit{

  displayedColumns: string[] = ['Matricula', 'Nome', 'Sobrenome', 'Telefone'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  expandedElement: Aluno | null;

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public goToDetail(id: number): void {
    this.router.navigate([`/alunos/detalhe/${id}`]);
  }

}
