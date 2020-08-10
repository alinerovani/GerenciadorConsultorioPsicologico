import { Component, OnInit } from '@angular/core';
import { Clinic } from '../models/clinic';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../models/city';
import { State } from '../models/state';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.page.html',
  styleUrls: ['./clinica.page.scss'],
})
export class ClinicaPage implements OnInit {

  clinicaForm: Clinic = new Clinic();

  estados: State[];
  estadoSelecionado: State;
  cidades: City[];

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
        if (this.clinicaForm.cityUid != undefined) {
          for (let index = 0; index < this.estados.length; index++) {
            let cidadesAux = this.estados[index].cities;
            for (let i = 0; i < cidadesAux.length; i++) {
              if(cidadesAux[i].uid == this.clinicaForm.cityUid) {
                this.estadoSelecionado = this.estados[index];
                this.changeEstado();
              }
            }
          }
        }
      });
  }

  changeEstado() {
    this.cidades = this.estadoSelecionado.cities;
  }

  salvarClinica() {
    this.apiService.novaClinica(this.clinicaForm);
  }

}
