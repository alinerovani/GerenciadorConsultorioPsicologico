import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPageRoutingModule } from './agenda-routing.module';

import { AgendaPage } from './agenda.page';

// Calendar UI Module
import { CalendarModule } from 'ion2-calendar';
import { LOCALE_ID } from '@angular/core';
// import { registerLocaleData } from '@angular/common';
// import pt from '@angular/common/locales/pt';
// registerLocaleData(pt)

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPageRoutingModule,
    CalendarModule
  ],
  declarations: [AgendaPage],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class AgendaPageModule {}
