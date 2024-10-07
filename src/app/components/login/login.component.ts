import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// > Servicio Login. Peticiones al servidor (en este caso, autenticación).
import { LoginService } from '../../services/login-service';

// > Importe del SnackBar, necesario para mostrar mensajes de alerta.
import { SnackBarService } from '../../animations/snack-bar-animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private loginService: LoginService, 
    private router: Router,
    private snackBar: SnackBarService) {

      // > Formulario: Recepción del usuario y contraseña.
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  // > Se envían los datos al servicio y en base a su respuesta, redirige o muestra un mensaje (SnackBar).
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.loginService.login(username, password).subscribe(
        response => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/productos']);
        },
        error => {
          this.snackBar.openSnackBar("Las credenciales ingresadas no son válidas", "Aceptar");
        }
      );
    }
  }
}
