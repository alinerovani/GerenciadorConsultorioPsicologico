import { LocalstorageService } from './localstorage.service';
import { AlertService } from './alert.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Clinic } from '../models/clinic';
import { State } from '../models/state';
import { Observable } from 'rxjs';
import { ClinicRoom } from '../models/clinicRoom';
import { Schedule } from '../models/schedule';

@Injectable({ providedIn: 'root' })
export class ApiService {

	constructor(
		private router: Router,
		private httpClient: HttpClient,
		public alertService: AlertService,
		private localStorage: LocalstorageService
	) { }

	login(user: User) {
		this.httpClient.post(`${environment.url_api}/auth`, user)
			.subscribe(data => {
				let status = data['status'];
				let message = data['message'];

				if (status == 200) {
					this.salvaLogin(message);
				}
				else
					this.alertService.alert("Não foi possível fazer login", "Dados incorretos!");
			}, error => {
				console.log(error);
			});
	}

	salvaLogin(message) {
		let user = Object.assign(new User, JSON.parse(JSON.stringify(message["user"])));
		this.localStorage.setLocalUser(user);
		this.localStorage.setTokenAuth(message["token"]);

		this.router.navigate(['/tabs']);
	}

	atualizaUser(user: User) {
		this.httpClient.post(`${environment.url_api}/users/update`, user)
			.subscribe(data => {
				let status = data['status'];
				let message = data['message'];

				if (status == 200) {
					this.salvaLogin(message);
				} else {
					let erros = data['errors'];
					let message = "";

					for (let er of erros) {
						if (message != "")
							message = message + "<br>";
						message = message + er["message"];
					}
					this.alertService.alert("Erro", message);
				}
			}, error => {
				console.log(error);
			});
	}

	cadastro(user: User) {
		this.httpClient.post(`${environment.url_api}/users`, user)
			.subscribe(data => {
				let status = data['status'];

				if (status == 200) {
					this.login(user);
				} else {
					let erros = data['errors'];
					let message = "";

					for (let er of erros) {
						if (message != "")
							message = message + "<br>";
						message = message + er["message"];
					}
					this.alertService.alert("Erro", message);
				}
			}, error => {
				console.log(error);
			});
	}

	novaClinica(clinica: Clinic) {
		let token = this.localStorage.getAuthToken();
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'x-token-access': token
			})
		};

		this.httpClient.post(`${environment.url_api}/clinics`, clinica, httpOptions)
			.subscribe(data => {
				let status = data['status'];

				if (status == 200) {
					this.router.navigate(['/tabs/tabCadastros']).then(nav => {
						window.location.reload();
					});
				} else {
					let erros = data['errors'];
					let message = "";

					for (let er of erros) {
						if (message != "")
							message = message + "<br>";
						message = message + er["message"];
					}
					this.alertService.alert("Erro", message);
				}
			}, error => {
				console.log(error);
			});
	}

	getClinicas(): Observable<Clinic[]> {
		let token = this.localStorage.getAuthToken();
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'x-token-access': token
			})
		};

		return this.httpClient.get<Clinic[]>(`${environment.url_api}/clinics`, httpOptions);
	}

	getEstados(): Observable<State[]> {
		let token = this.localStorage.getAuthToken();
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'x-token-access': token
			})
		};

		return this.httpClient.get<State[]>(`${environment.url_api}/states`, httpOptions);
	}

	getConsultorios(): Observable<ClinicRoom[]> {
		let token = this.localStorage.getAuthToken();
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'x-token-access': token
			})
		};

		return this.httpClient.get<ClinicRoom[]>(`${environment.url_api}/clinicrooms`, httpOptions);
	}

	novoConsultorio(consultorio: ClinicRoom) {
		let token = this.localStorage.getAuthToken();
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'x-token-access': token
			})
		};

		this.httpClient.post(`${environment.url_api}/clinicrooms`, consultorio, httpOptions)
			.subscribe(data => {
				let status = data['status'];

				if (status == 200) {
					this.router.navigate(['/tabs/tabCadastros']).then(nav => {
						window.location.reload();
					});
				} else {
					let erros = data['errors'];
					let message = "";

					for (let er of erros) {
						if (message != "")
							message = message + "<br>";
						message = message + er["message"];
					}
					this.alertService.alert("Erro", message);
				}
			}, error => {
				console.log(error);
			});
	}

	getPendingSchedule(): Observable<Schedule[]> {
		let token = this.localStorage.getAuthToken();
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'x-token-access': token
			})
		};

		return this.httpClient.get<Schedule[]>(`${environment.url_api}/pendingschedules`, httpOptions);
	}

	getSchedulesUser(): Observable<Schedule[]> {
		let token = this.localStorage.getAuthToken();
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'x-token-access': token
			})
		};

		let user = this.localStorage.getLocalUser();

		return this.httpClient.get<Schedule[]>(`${environment.url_api}/schedules/user/${user.uid}`, httpOptions);
	}

	salvaAgendamento(schedule: Schedule) {
		let token = this.localStorage.getAuthToken();
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'x-token-access': token
			})
		};

		return this.httpClient.post(`${environment.url_api}/schedule`, schedule, httpOptions);
	}
}


