import { LocalstorageService } from './../services/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user: User;

  constructor(
    private apiService: ApiService,
    private localStorage: LocalstorageService
    ) { }

  ngOnInit() {
    this.user = this.localStorage.getLocalUser();
  }

  logout() {
    this.apiService.logout();
  }

}
