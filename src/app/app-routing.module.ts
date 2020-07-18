import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./relatorios/relatorios.module').then( m => m.RelatoriosPageModule)
  },
  {
    path: 'cadastros',
    loadChildren: () => import('./cadastros/cadastros.module').then( m => m.CadastrosPageModule)
  },
  {
    path: 'reserva-consultorio',
    loadChildren: () => import('./reserva-consultorio/reserva-consultorio.module').then( m => m.ReservaConsultorioPageModule)
  },
  {
    path: 'consultorio',
    loadChildren: () => import('./consultorio/consultorio.module').then( m => m.ConsultorioPageModule)
  },
  {
    path: 'clinica',
    loadChildren: () => import('./clinica/clinica.module').then( m => m.ClinicaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
