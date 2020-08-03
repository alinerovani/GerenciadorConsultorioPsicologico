import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getLocalUser() {
    if (localStorage.getItem("PS:USER_INFO") == null)
      return null;
    
    return Object.assign(new User, JSON.parse(localStorage.getItem("PS:USER_INFO")));
  }

  setLocalUser(user: User) {
    localStorage.setItem("PS:USER_INFO", JSON.stringify(user));
  }

  removeLocalUser() {
    localStorage.removeItem("PS:USER_INFO");
  }
}
