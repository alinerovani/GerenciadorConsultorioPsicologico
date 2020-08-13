import { Component, OnInit } from '@angular/core';
import { Schedule } from '../models/schedule';
import { ApiService } from '../services/api.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-aprovacao-reserva',
  templateUrl: './aprovacao-reserva.page.html',
  styleUrls: ['./aprovacao-reserva.page.scss'],
})
export class AprovacaoReservaPage implements OnInit {

  schedules: Schedule[];

  constructor(private apiService: ApiService, private alertService: AlertService) {
    this.schedules = [];
  }

  ngOnInit() {
    this.getSchedules();
  }

  getSchedules() {
    this.apiService.getPendingSchedule()
      .subscribe(response => {
        this.schedules = response;
      })
  }

  confirmSchedule(schedule: Schedule) {
    console.log(schedule);
    schedule.status = 2;
    this.apiService.salvaAgendamento(schedule).subscribe(data => {
      let status = data['status'];

      if (status == 200) {
        this.getSchedules();
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

  cancelSchedule(schedule: Schedule) {
    console.log(schedule);
    schedule.status = 3;
    this.apiService.salvaAgendamento(schedule).subscribe(data => {
      let status = data['status'];

      if (status == 200) {
        this.getSchedules();
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

}
