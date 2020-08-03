import { AlertService } from './alert.service';
import { environment } from './../../environments/environment';
import { Injectable } from  '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from  '../models/user';
import { error } from 'protractor';

@Injectable({ providedIn: 'root' })
export class ApiService {

  	constructor(
    	private router: Router,
    	private httpClient: HttpClient, 
    	public alertService: AlertService,
      ) { }
      
    login(user: User) {
		this.httpClient.post(`${environment.url_api}/auth`, user)
			.subscribe(data => {
				let status = data['status'];
				let message = data['message'];
			
				if (status == 200) {
					//this.alertService.toast("Login efetuado com sucesso!");
					localStorage.setItem("PS:USER_INFO", JSON.stringify(message["user"]));
					localStorage.setItem("PS:USER_TOKEN", JSON.stringify(message[ "token"]));
					
					this.router.navigate(['/tabs']);
				}
				else
					this.alertService.alert("Não foi possível fazer login", "Dados incorretos!");
			}, error => {
				console.log(error);
			});
	}

	logout() {
		localStorage.removeItem("PS:USER_INFO");
		this.router.navigate(['/login']);
	}
  
	cadastro(user: User) {
		this.httpClient.post(`${environment.url_api}/users`, user)
			.subscribe(data => {
                let status = data['status'];
                
                if(status == 200 ) {
                    this.login(user);
                } else {
                    let erros = data['errors'];
                    let message = "";

                    for (let er of erros) {
                        if(message != "")
                            message = message + "<br>";
                        message = message + er["message"];
                    }
                    this.alertService.alert("Erro", message);
                }
			}, error => {
				console.log(error);
			});
	}
}


