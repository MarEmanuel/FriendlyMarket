// > Se usa LocalStorage ya que permite mantener un dato en la sesión web.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    // > Retorna un boolean, dependiendo de si hay una sesión vigente o no.
    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    // > Elimina el token de sesión.
    logout(): void {
        localStorage.removeItem('token');
    }
}
