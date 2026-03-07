import { Component } from '@angular/core';
import { Select } from "./components/select/select";

@Component({
    selector: 'app-root',
    imports: [Select],
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

    pais = 0;

    changePais(value: number) {
        this.pais = value;
        console.log("pais: ", this.pais)
    }


}
