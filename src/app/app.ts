import { Component } from '@angular/core';
import { Select } from "./components/select/select";
import { CustomInput } from './components/custom-input/custom-input';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [Select, CustomInput],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    countries = [
        { id: 454, nombre: 'Colombia' },
        { id: 655, nombre: 'España' },
        { id: 3456, nombre: 'Argentina' },
        { id: 24, nombre: 'México' },
        { id: 1, nombre: 'Estados Unidos' },
    ]
    selectedCountry = 'Colombia';



    correo = new FormControl('', [Validators.required, Validators.email]);
    cedula = new FormControl(0, [Validators.min(5), Validators.max(100)]);

    pais = 0;

    //console.log(input5.value);

    changePais(value: number) {
        this.pais = value;
        console.log("pais: ", this.pais)
    }


}
