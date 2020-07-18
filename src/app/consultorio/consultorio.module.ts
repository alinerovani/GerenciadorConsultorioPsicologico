import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultorioPageRoutingModule } from './consultorio-routing.module';

import { ConsultorioPage } from './consultorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultorioPageRoutingModule
  ],
  declarations: [ConsultorioPage]
})
export class ConsultorioPageModule {}
