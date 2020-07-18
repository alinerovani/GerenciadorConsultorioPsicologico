import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprovacaoReservaPage } from './aprovacao-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: AprovacaoReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprovacaoReservaPageRoutingModule {}
