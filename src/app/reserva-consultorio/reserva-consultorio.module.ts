import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaConsultorioPageRoutingModule } from './reserva-consultorio-routing.module';

import { ReservaConsultorioPage } from './reserva-consultorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaConsultorioPageRoutingModule
  ],
  declarations: [ReservaConsultorioPage]
})
export class ReservaConsultorioPageModule {}
