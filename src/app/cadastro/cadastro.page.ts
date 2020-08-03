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

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  cadastrar() {
    this.apiService.cadastro(this.userForm);
  }

}
