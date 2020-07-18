import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelatorioCardComponent } from './relatorio-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [RelatorioCardComponent],
  exports: [RelatorioCardComponent]
})
export class RelatorioCardComponentModule {}

