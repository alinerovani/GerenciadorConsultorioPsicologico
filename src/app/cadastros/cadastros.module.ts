import { ListConsultoriosComponentModule } from './../components/list-consultorios/list-consultorios.module';
import { ListClinicasComponentModule } from './../components/list-clinicas/list-clinicas.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrosPageRoutingModule } from './cadastros-routing.module';

import { CadastrosPage } from './cadastros.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    CadastrosPageRoutingModule,
    ListClinicasComponentModule,
    ListConsultoriosComponentModule
  ],
  declarations: [CadastrosPage]
})
export class CadastrosPageModule {}
