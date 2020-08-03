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

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.user = Object.assign(new User, JSON.parse(localStorage.getItem("PS:USER_INFO")));
  }

  logout() {
    this.apiService.logout();
  }

}
