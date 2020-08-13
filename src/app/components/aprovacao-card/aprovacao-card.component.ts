import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import * as moment from 'moment';

@Component({
  selector: 'app-aprovacao-card',
  templateUrl: './aprovacao-card.component.html',
  styleUrls: ['./aprovacao-card.component.scss'],
})
export class AprovacaoCardComponent implements OnInit {

  @Input() schedule: Schedule;
  @Output() confirmScheduleEvent = new EventEmitter<Schedule>();
  @Output() cancelScheduleEvent = new EventEmitter<Schedule>();

  constructor() { }

  ngOnInit() {}

  formatDate(date: Date) {
    return moment(date.toString()).format('DD/MM/YYYY HH:mm');
  }

  callConfirm() {
    this.confirmScheduleEvent.next(this.schedule);
  }

  callCancel() {
    this.cancelScheduleEvent.next(this.schedule);
  }

}
