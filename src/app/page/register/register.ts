import { Component, inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CustomInput } from "../../components/custom-input/custom-input";
import { Select } from "../../components/select/select";
import { map, Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { SexoService } from "../../services/sexo/sexo.service";
import { UsuarioService } from "../../services/usuario/usuario.service";
import { Usuario } from "../../models/user.model";


@Component({
  selector: "app-register",
  imports: [FormsModule, ReactiveFormsModule, CustomInput, Select, AsyncPipe],
  templateUrl: "./register.html",
  styleUrl: "./register.css",
})
export class Register implements OnInit {

    private sexoService = inject(SexoService);
    private usuarioService = inject(UsuarioService);

    sexo$!: Observable<{id: number; nombre: string}[]>;

    
    ngOnInit() {
        this.sexo$ = this.sexoService.obtenerSexo();
    }




    formUser = new FormGroup({
        nombre: new FormControl("", [Validators.required]),
        apellido: new FormControl("", [Validators.required]),
        cedula: new FormControl<number | null>(null, [Validators.required]),
        correo: new FormControl("", [Validators.required, Validators.email]),
        edad: new FormControl<number | null>(null, [Validators.required]),
        sexo: new FormControl<number | null>(null, [Validators.required]),
        usuario: new FormControl("", [Validators.required]),
        clave: new FormControl("", [Validators.required]),
    });




    get nombre() { 
        return this.formUser.get("nombre") as FormControl; 
    }
    get apellido() { 
        return this.formUser.get("apellido") as FormControl; 
    }
    get cedula() { 
        return this.formUser.get("cedula") as FormControl; 
    }
    get correo() { 
        return this.formUser.get("correo") as FormControl; 
    }
    get edad() { 
        return this.formUser.get("edad") as FormControl;
    }
    get sexo() { 
        return this.formUser.get("sexo") as FormControl; 
    }
    get usuario() {
        return this.formUser.get("usuario") as FormControl; 
    }
    get clave() { 
        return this.formUser.get("clave") as FormControl; 
    }




    seleccionarSexo(sexoUsuario: number){
        this.sexo.setValue(sexoUsuario);
        console.log("sexo: ", sexoUsuario);
    }
    

    crearUsuario() {
        if (this.formUser.valid) {
            console.log(this.formUser.value);
            const newUser = this.formUser.value as Usuario;

            this.usuarioService.registrarse(newUser);

        } else {
            this.formUser.markAllAsTouched();
        }
    }

}
