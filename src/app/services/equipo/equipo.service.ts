import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Equipo } from '../../models/equipo';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
    private crearEquipoUrl = "";
    private obtenerEquipoUrl = "";


    constructor(private http: HttpClient){}

    crearEquipo(newEquipo: Equipo){
        return this.http.post(this.crearEquipoUrl, newEquipo);
    }

    obtenerEquipo(idUsuario: number){
        return this.http.get(`${this.obtenerEquipoUrl}/${idUsuario}`);
    }
}
