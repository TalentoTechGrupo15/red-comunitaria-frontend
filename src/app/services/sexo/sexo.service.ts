import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sexo } from '../../models/sexo.model';
import { Respuesta } from '../../models/respuesta.model';

@Injectable({
  providedIn: 'root',
})
export class SexoService {

    private getSexoUrl = "http://localhost:8080/sexo/listar";

    constructor(private http: HttpClient){}

    obtenerSexo(){
        return this.http.get<Respuesta[]>(this.getSexoUrl);
    }
}
