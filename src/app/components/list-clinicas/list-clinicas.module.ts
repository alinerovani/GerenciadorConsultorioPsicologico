import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListClinicasComponent } from './list-clinicas.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ListClinicasComponent],
  exports: [ListClinicasComponent]
})
export class ListClinicasComponentModule {}

