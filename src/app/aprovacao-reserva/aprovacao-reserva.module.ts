import { AprovacaoCardComponentModule } from './../components/aprovacao-card/aprovacao-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprovacaoReservaPageRoutingModule } from './aprovacao-reserva-routing.module';

import { AprovacaoReservaPage } from './aprovacao-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprovacaoReservaPageRoutingModule,
    AprovacaoCardComponentModule
  ],
  declarations: [AprovacaoReservaPage]
})
export class AprovacaoReservaPageModule {}
