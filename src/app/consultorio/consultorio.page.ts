import { Component, OnInit } from '@angular/core';
import { ClinicRoom } from '../models/clinicRoom';
import { Clinic } from '../models/clinic';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultorio',
  templateUrl: './consultorio.page.html',
  styleUrls: ['./consultorio.page.scss'],
})
export class ConsultorioPage implements OnInit {

  consultorioForm: ClinicRoom = new ClinicRoom();

  clinicas: Clinic[];

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    this.consultorioForm = new ClinicRoom();

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.consultorioForm = this.router.getCurrentNavigation().extras.state.clinic_room;
      }
    });
  }

  ngOnInit() {
    this.getClinicas();
  }

  getClinicas() {
    this.apiService.getClinicas()
      .subscribe(response => {
        this.clinicas = response;
      })
  }

  salvarConsultorio() {
    this.apiService.novoConsultorio(this.consultorioForm);
  }

}
