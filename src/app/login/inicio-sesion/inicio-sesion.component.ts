import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent  implements OnInit {
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


}
