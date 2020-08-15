import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(private router: Router) { }

  getLocalUser() {
    if (localStorage.getItem("PS:USER_INFO") == null)
      return null;

    return Object.assign(new User, JSON.parse(localStorage.getItem("PS:USER_INFO")));
  }

  setLocalUser(user: User) {
    localStorage.setItem("PS:USER_INFO", JSON.stringify(user));
  }

  setTokenAuth(token: string) {
    localStorage.setItem("PS:USER_TOKEN", token);
  }

  getVisibleClinic() {
    if (localStorage.getItem("visibleClinic") == null)
      return true; //padrao

    return Boolean(JSON.parse(localStorage.getItem("visibleClinic")));
  }

  setVisibleClinic(visibleClinic: boolean) {
    localStorage.setItem("visibleClinic", String(visibleClinic));
  }

  clearLocalStorage() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getAuthToken() {
    if (localStorage.getItem("PS:USER_TOKEN") == null)
      return null;

    return localStorage.getItem("PS:USER_TOKEN");
  }
}
