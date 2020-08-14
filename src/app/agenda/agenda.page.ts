import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { Clinic } from '../models/clinic';
import { ApiService } from '../services/api.service';
import { ClinicRoom } from '../models/clinicRoom';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})

export class AgendaPage implements OnInit {
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

  dateRange: { from: string; to: string; };
  type: 'string';

  optionsRange: CalendarComponentOptions = {
    monthFormat: 'MM/YYYY',
    weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    weekStart: 0,
  };

  changeClinica(clinicaSelecionada) {
    this.clinicaSelecionada = clinicaSelecionada;
    this.consultorios = this.clinicaSelecionada.rooms;
  }
}
