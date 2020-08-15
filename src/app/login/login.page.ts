import { LocalstorageService } from './../services/localstorage.service';

import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm: User = new User();

  constructor(private apiService: ApiService, private localStorage: LocalstorageService, private navCtrl: NavController,) { }

  ngOnInit() {
    let user_logged = this.localStorage.getLocalUser();

		if (user_logged != null) {
			this.navCtrl.navigateRoot('');
		}
  }

  login() {
    this.apiService.login(this.userForm);
  }

}
