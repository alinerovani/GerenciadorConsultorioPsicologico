import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaConsultorioPage } from './reserva-consultorio.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaConsultorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaConsultorioPageRoutingModule {}
