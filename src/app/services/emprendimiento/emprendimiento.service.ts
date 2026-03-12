import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICES } from '../../constants/services.constants';
import { Emprendimiento } from '../../models/emprendimiento.model';

@Injectable({
    providedIn: 'root',
})
export class EmprendimientoService {

    private buscarEmprendimientoURL = "http://localhost:8080/emprendimiento/buscar";

    constructor(private http: HttpClient) { }

    crearEmprendimiento(emprendimiento: any) {

        const usuarioInfo = localStorage.getItem(SERVICES.LOCALSTORAGE_NOMBRE_INFORMACION_USUARIO);

        const token = usuarioInfo ? JSON.parse(usuarioInfo).token : "";

        console.log(token)
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

        return this.http.post<Emprendimiento>("http://localhost:8080/emprendimiento/crear_emprendimiento", emprendimiento, { headers });
    }

    
    buscarEmprendimientos(filtros: any) {
        const nombre = filtros.nombre;
        const tipo = filtros.tipoEmprendimiento;
        const etapa = filtros.etapa;
        const pais = filtros.pais;
        const agruparPor = filtros.agruparPor;
        const numeroResultados = filtros.numeroResultados;


        const url = `${this.buscarEmprendimientoURL}?nombre=${nombre}&tipo=${tipo}&etapa=${etapa}&pais=${pais}&agruparPor=${agruparPor}&numeroResultados=${numeroResultados ? numeroResultados : ""}`;
        return this.http.get<Emprendimiento[]>(url);
    }
}
