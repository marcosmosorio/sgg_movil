import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [InicioSesionComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
