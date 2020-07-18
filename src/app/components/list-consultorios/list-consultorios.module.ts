import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListConsultoriosComponent } from './list-consultorios.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ListConsultoriosComponent],
  exports: [ListConsultoriosComponent]
})
export class ListConsultoriosComponentModule {}

