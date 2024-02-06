import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [InicioSesionComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { 
}
