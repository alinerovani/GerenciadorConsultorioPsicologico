import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.page.html',
  styleUrls: ['./cadastros.page.scss'],
})
export class CadastrosPage implements OnInit {

  visibleClinic: boolean;

  constructor() {
    this.visibleClinic = true;
  }

  ngOnInit() {
  }

  clickTab() {
    this.visibleClinic = !this.visibleClinic;
  }

}
