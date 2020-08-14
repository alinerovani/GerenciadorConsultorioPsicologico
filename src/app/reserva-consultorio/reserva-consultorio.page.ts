import { Component, OnInit } from '@angular/core';
import { Clinic } from '../models/clinic';
import { ApiService } from '../services/api.service';
import { ClinicRoom } from '../models/clinicRoom';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reserva-consultorio',
  templateUrl: './reserva-consultorio.page.html',
  styleUrls: ['./reserva-consultorio.page.scss'],
})
export class ReservaConsultorioPage implements OnInit {
  clinicaSelecionada: Clinic;
  clinicas: Clinic[];
  consultorios: ClinicRoom[];

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    this.clinicas = [];
    this.consultorios = [];
  }

  ngOnInit() {
    this.getClinicas();
    this.getConsultorios();
  }

  getClinicas() {
    this.apiService.getClinicas()
      .subscribe(response => {
        this.clinicas = response;
      })
  }

  getConsultorios() {
    this.apiService.getConsultorios()
      .subscribe(response => {
        this.consultorios = response;
      })
  }

  changeClinica(clinicaSelecionada) {
    this.clinicaSelecionada = clinicaSelecionada;
    this.consultorios = this.clinicaSelecionada.rooms;
  }
}
