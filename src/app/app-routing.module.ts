import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule) 
  },
  {
    path: 'slide',
    loadChildren: () => import('./ventana-principal/slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'menu-inicio',
    loadChildren: () => import('./ventana-principal/menu-inicio/menu-inicio.module').then( m => m.MenuInicioPageModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
