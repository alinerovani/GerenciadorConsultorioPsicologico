import { LocalstorageService } from './../services/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  userForm: User = new User();

  constructor(private apiService: ApiService, private localStorage: LocalstorageService) { }

  ngOnInit() {
    let user = this.localStorage.getLocalUser();
    if (user != null) {
      delete user.password;
      this.userForm = user;
    }
  }

  cadastrar() {
    if (this.userForm.uid)
      this.apiService.atualizaUser(this.userForm);
    else
      this.apiService.cadastro(this.userForm);
  }

}
