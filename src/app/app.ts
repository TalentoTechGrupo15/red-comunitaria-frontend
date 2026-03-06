import { Component } from '@angular/core';
import { Select } from "./components/select/select";

@Component({
  selector: 'app-root',
  imports: [Select],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    countries = ['Colombia', 'Argentina', 'México', 'Chile', 'Perú'];
    selectedCountry = 'Colombia';

    pais = "";

    changePais(value: string){
        this.pais = value;
    }

}
