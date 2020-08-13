import { Component, OnInit } from '@angular/core';
import { Schedule, Status } from '../models/schedule';
import { ApiService } from '../services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.page.html',
  styleUrls: ['./meus-agendamentos.page.scss'],
})
export class MeusAgendamentosPage implements OnInit {

  schedules: Schedule[];

  constructor(private apiService: ApiService) {
    this.schedules = [];
  }

  ngOnInit() {
    this.getSchedules();
  }

  getSchedules() {
    this.apiService.getSchedulesUser()
      .subscribe(response => {
        this.schedules = response;
        console.log(response);
      })
  }

  formatDate(date: Date) {
    return moment(date.toString()).format('DD/MM/YYYY HH:mm');
  }

  getStatus(schedule_item: Schedule) {
    return Status[schedule_item.status];
  }

}
