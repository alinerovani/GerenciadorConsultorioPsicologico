import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
      { path: 'tabAgenda', loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaPageModule) },
    ]
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
  },
  {
    path: 'aprovacao-reserva',
    loadChildren: () => import('./aprovacao-reserva/aprovacao-reserva.module').then( m => m.AprovacaoReservaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'meus-agendamentos',
    loadChildren: () => import('./meus-agendamentos/meus-agendamentos.module').then( m => m.MeusAgendamentosPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
