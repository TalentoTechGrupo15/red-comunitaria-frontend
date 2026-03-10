import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInput } from '../../components/custom-input/custom-input';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { LoginCredentials } from '../../models/user.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, CustomInput, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    private usuarioService = inject(UsuarioService);
    private router = inject(Router);

    formLogin = new FormGroup({
        usuario: new FormControl("", [Validators.required]),
        clave: new FormControl("", [Validators.required]),
    });

    
    get usuario() { return this.formLogin.get("usuario") as FormControl; }
    get clave() { return this.formLogin.get("clave") as FormControl; }




    iniciarSesion() {
        if (this.formLogin.valid) {
            console.log(this.formLogin.value);
            const credentials = this.formLogin.value as LoginCredentials;

            this.usuarioService.login(credentials);

            if(this.usuarioService.isLogged$){
                this.router.navigate(["/"]);
            }

        } else {
            this.formLogin.markAllAsTouched();
        }
    }

}
