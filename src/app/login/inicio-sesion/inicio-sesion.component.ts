import { Component, Input, OnInit, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';


register();

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent  implements OnInit {
  swiperModules = [IonicSlides];
  formLogin: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _router: Router) { }

  ngOnInit() {this.buildForm()}
  
  buildForm() {
    this.formLogin = this._formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(9)]],
    });
  }

  submitForm(){
    if (this.formLogin.valid) {
      
      console.log(this.formLogin.value);
    }
  }
  accesoDev(){
    this._router.navigate(['/menu-inicio']);
  }
  cambiarLogin(){
    
  }
}
