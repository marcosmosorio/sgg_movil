import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class PasswordHashService {

  constructor() { }

  // Esta función encripta la contraseña utilizando PBKDF2
  encryptPassword(password: string, salt: string): string {
    const keySize = 256;
    const iterations = 1000;
    const key = CryptoJS.PBKDF2(password, salt, {keySize: keySize / 32, iterations: iterations });
    return key.toString(CryptoJS.enc.Base64);
  }

  // Esta función genera una cadena de caracteres aleatoria para utilizar como salt
  generateSalt(): string {
    return CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Base64);
  }
}
