import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';
import { PasswordHashService } from 'src/app/services/password-hash.service';
import { ConectionDBService } from 'src/app/services/conection-db.service';

register();

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})

export class InicioSesionComponent  implements OnInit {
  formLogin: FormGroup;
  passwordFieldType: string = 'password';
  showPassword: boolean = false;
  swiperModules = [IonicSlides];

  constructor(private _formBuilder: FormBuilder,
    private _router: Router,
    private _passwordHashService: PasswordHashService,
    private _databaseService: ConectionDBService ) { }

  ngOnInit() {this.buildForm()}
  
  buildForm() {
    this.formLogin = this._formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(9)]],
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.passwordFieldType = this.showPassword ? 'text' : 'password';
  }

  async submitForm(){
    if (this.formLogin.valid) {
      const username = this.formLogin.value.Email;
      const password = this.formLogin.value.Password;
      try {
        const password = 'contraseñaSegura123';
        const salt = this._passwordHashService.generateSalt();
        const hashedPassword = this._passwordHashService.encryptPassword(password, salt);

        // Obtener la conexión a la base de datos desde el servicio
        await this._databaseService.openDatabase();

        // Ejecutar la consulta SQL
        const query = 'SELECT * FROM AspNetUsers WHERE UserName = ? AND PasswordHash = ?'
        const result = await this._databaseService.executeQuery(query, [username, hashedPassword]);
        
        if (result.values.length > 0) {
          console.log('Usuario válido. Iniciar sesión...');
          // Aquí puedes redirigir al usuario a la página de inicio de sesión exitosa
        } else {
          console.log('Nombre de usuario o contraseña incorrectos.');
          // Aquí puedes mostrar un mensaje de error al usuario
        }
      }catch(error) {
        console.log('Error al conectar a la base de datos', error);
      } finally {
        //cerramos la conexion despues de usarla
        await this._databaseService.closeDatabase();
      }
    }
  }
}
