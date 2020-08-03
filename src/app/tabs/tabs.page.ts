import { LocalstorageService } from './../services/localstorage.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../models/user';

@Component({
	selector: 'app-tabs',
	templateUrl: 'tabs.page.html',
	styleUrls: ['tabs.page.scss']
})
export class TabsPage {

	user: User;

	constructor(
		private navCtrl: NavController,
		private localStorage: LocalstorageService
	) { }

	ngOnInit(): void {
		this.user = this.localStorage.getLocalUser();

		if (this.user == null) {
			this.navCtrl.navigateRoot('/login');
		}
	}
}
