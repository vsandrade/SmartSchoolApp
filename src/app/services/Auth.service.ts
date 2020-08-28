import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/User';
import { Auth } from '../models/Auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) { }

  registerUser(authData: Auth): void {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authSuccessfully();
  }

  login(authData: Auth): void {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authSuccessfully();
  }

  logout(): void {
    this.user = null;
    this.authChange.next(false);
  }

  getUser(): User {
    return { ...this.user };
  }

  isAuth(): boolean {
    console.log(this.user);
    return this.user !== null && this.user !== undefined;
  }

  private authSuccessfully(): void {
    this.authChange.next(true);
    this.router.navigate(['/Professor']);
  }

}
