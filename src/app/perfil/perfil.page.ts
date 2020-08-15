import { LocalstorageService } from './../services/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user: User;

  constructor(
    private localStorage: LocalstorageService
    ) { }

  ngOnInit() {
    this.user = this.localStorage.getLocalUser();
  }

  logout() {
    this.localStorage.clearLocalStorage();
  }

}
