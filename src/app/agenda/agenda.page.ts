import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  ngOnInit() {
  }

  dateRange: { from: string; to: string; };
  type: 'string';

  optionsRange: CalendarComponentOptions = {
    monthFormat: 'MM/YYYY',
    weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    weekStart: 0,
  };

  constructor() { }

  onChange($event) {
    console.log($event);
  }

}
