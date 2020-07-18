import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprovacaoCardComponent } from './aprovacao-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AprovacaoCardComponent],
  exports: [AprovacaoCardComponent]
})
export class AprovacaoCardComponentModule {}

