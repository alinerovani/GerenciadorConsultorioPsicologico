import { LocalstorageService } from './../services/localstorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.page.html',
  styleUrls: ['./cadastros.page.scss'],
})
export class CadastrosPage implements OnInit {

  visibleClinic: boolean;

  constructor(private localStorage: LocalstorageService) {
    this.visibleClinic = localStorage.getVisibleClinic();
  }

  ngOnInit() {
  }

  clickTabClinica() {
    this.visibleClinic = true;
    this.localStorage.setVisibleClinic(this.visibleClinic);
  }

  clickTabConsultorio() {
    this.visibleClinic = false;
    this.localStorage.setVisibleClinic(this.visibleClinic);
  }

}
