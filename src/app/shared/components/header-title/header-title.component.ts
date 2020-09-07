import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Util } from '../../util/util';
@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent implements OnInit {

  @Input() title: string;
  public util: Util;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  listar(): void {
    this.router.navigate([`/${this.title}/lista`]);
  }

  novo(): void {
    this.router.navigate([`/${this.title}/detalhe`]);
  }

  voltar(): void {
    window.history.back();
  }

  titleCapitalized(): string {
    return Util.Capitalized(this.title);
  }

}
