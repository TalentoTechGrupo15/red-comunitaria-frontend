import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInput } from '../../components/custom-input/custom-input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, CustomInput, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    formLogin = new FormGroup({
        usuario: new FormControl("", [Validators.required]),
        clave: new FormControl("", [Validators.required]),
    });

    get usuario() { return this.formLogin.get("usuario") as FormControl; }
    get clave() { return this.formLogin.get("clave") as FormControl; }


    iniciarSesion() {
        if (this.formLogin.valid) {
            console.log(this.formLogin.value);
        } else {
            this.formLogin.markAllAsTouched();
        }
    }

}
