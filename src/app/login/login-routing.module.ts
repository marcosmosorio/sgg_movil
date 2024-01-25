import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: InicioSesionComponent },
      { path: '**', redirectTo: 'login'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes)
  ]
})
export class LoginRoutingModule {  }
