import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { Respuesta } from '../../models/respuesta.model';
import { Observable } from 'rxjs';
import { SERVICES } from '../../constants/services.constants';
import { UsuarioInfo } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
    private crearEquipoUrl = "http://localhost:8080/usuario/crear_equipo";
    private obtenerEquipoUrl = "";
    private obtenerPaisesURL = "http://localhost:8080/pais/listar";
    private obtenerDepartamentosURL = "http://localhost:8080/region/listar";
    private obtenerEtapasURL = "http://localhost:8080/etapa/listar";
    private obtenerTiposDeEmprendimientoURL = "http://localhost:8080/tipo_emprendimiento/listar";


    constructor(private http: HttpClient){}


    crearEquipo(newEquipo: Equipo){
        console.log(newEquipo);

        const usuarioInfo = localStorage.getItem(SERVICES.LOCALSTORAGE_NOMBRE_INFORMACION_USUARIO);
        const token = usuarioInfo ? JSON.parse(usuarioInfo).token : "";
        
        console.log(token)
        const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
        return this.http.post(this.crearEquipoUrl, newEquipo, {headers});


    }

    obtenerEquipo(idUsuario: number){
        return this.http.get(`${this.obtenerEquipoUrl}/${idUsuario}`);
    }

    obtenerPaises(): Observable<Respuesta[]>{
        return this.http.get<Respuesta[]>(this.obtenerPaisesURL);
    }

    obtenerDepartamentos(): Observable<Respuesta[]>{
        return this.http.get<Respuesta[]>(this.obtenerDepartamentosURL);
    }

    obtenerEtapas(): Observable<Respuesta[]>{
        return this.http.get<Respuesta[]>(this.obtenerEtapasURL);
    }

    obtenerTiposDeEmprendimiento(): Observable<Respuesta[]>{
        return this.http.get<Respuesta[]>(this.obtenerTiposDeEmprendimientoURL);
    }
}
