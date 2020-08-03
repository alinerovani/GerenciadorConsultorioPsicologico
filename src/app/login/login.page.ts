
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm: User = new User();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  login() {
    this.apiService.login(this.userForm);
  }

}
