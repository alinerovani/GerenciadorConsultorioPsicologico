import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultorioPage } from './consultorio.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultorioPageRoutingModule {}
