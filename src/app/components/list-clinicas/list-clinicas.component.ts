import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clinicas',
  templateUrl: './list-clinicas.component.html',
  styleUrls: ['./list-clinicas.component.scss'],
})
export class ListClinicasComponent implements OnInit {

  clinicas: any;

  constructor(private apiService: ApiService, private router: Router,) {
    this.clinicas = [];
  }

  ngOnInit() {
    this.getClinicas();
  }

  getClinicas() {
    console.log("get clinicas");
    this.apiService.getClinicas()
      .subscribe(response => {
        this.clinicas = response;
      })
  }

  openFormClinica(index: number) {
    let navigationExtras: NavigationExtras = { state: { clinic: this.clinicas[index] } };
    this.router.navigate(['/clinica'], navigationExtras);
  }

}
