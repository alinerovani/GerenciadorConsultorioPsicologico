import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Component, OnInit } from '@angular/core';
import { Clinic } from '../models/clinic';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import State from 'ps.api/src/entity/State';
import { City } from '../models/city';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.page.html',
  styleUrls: ['./clinica.page.scss'],
})
export class ClinicaPage implements OnInit {

  clinicaForm: Clinic = new Clinic();

  estados: any;
  estadoSelecionado: State;
  cidades: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    this.estados = [];
    this.cidades = [];

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.clinicaForm = this.router.getCurrentNavigation().extras.state.clinic;
      }
    });
  }

  ngOnInit() {
    this.loadEstados();
  }

  loadEstados() {
    this.apiService.getEstados()
      .subscribe(response => {
        this.estados = response;
        for (let index = 0; index < this.estados.length; index++) {
          /*if(this.clinicaForm.uid != undefined && this.estados[index].uid == this.clinicaForm.city.stateUid) {
            this.estadoSelecionado = this.estados[index];
            this.cidades = this.estados[index].cities;
          }*/
        }
      })
  }

  changeEstado() {
    this.cidades = this.estadoSelecionado.cities;
  }

  salvarClinica() {
    this.apiService.novaClinica(this.clinicaForm);
  }

}
