import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CustomInput } from "../../components/custom-input/custom-input";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select } from "../../components/select/select";
import { Observable, of, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { EquipoService } from '../../services/equipo/equipo.service';
import { Respuesta } from '../../models/respuesta.model';
import { EmprendimientoCard } from "../../components/emprendimiento-card/emprendimiento-card";
import { Emprendimiento } from '../../models/emprendimiento.model';

@Component({
  selector: 'app-dashboard',
  imports: [CustomInput, FormsModule, ReactiveFormsModule, Select, AsyncPipe, EmprendimientoCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit, OnDestroy {



    private equipoService = inject(EquipoService);
    
    tipoEmprendimiento$!: Observable<Respuesta[]>;
    etapa$!: Observable<Respuesta[]>;
    pais$!: Observable<Respuesta[]>;
    departamento$!: Observable<Respuesta[]>;
    emprendimientos$:Emprendimiento[] = [];
    //agruparPor$!: Observable<Respuesta[]>;
    private suscripcionEmprendimiento!: Subscription;


    ngOnInit(): void {
        this.tipoEmprendimiento$ = this.equipoService.obtenerTiposDeEmprendimiento();
        this.etapa$ = this.equipoService.obtenerEtapas();
        this.pais$ = this.equipoService.obtenerPaises();
        this.departamento$ = this.equipoService.obtenerDepartamentos();
    }


    formFiltros = new FormGroup({
        nombre: new FormControl(""),
        tipoEmprendimiento: new FormControl(""),
        etapa: new FormControl(""),
        pais: new FormControl(""),
        departamento: new FormControl(""),
        agruparPor: new FormControl(""),
        numeroResultados: new FormControl<null | number>(null)
    })

    filtrar(){
        const filtros = this.formFiltros.value;
        this.suscripcionEmprendimiento = this.equipoService.buscarEmprendimientos(filtros).subscribe({
            next:(res)=>{
                this.emprendimientos$ = res;
            }
        });
    }


    get nombre(){
        return this.formFiltros.get("nombre") as FormControl;
    }
    get tipoEmprendimiento(){
        return this.formFiltros.get("tipoEmprendimiento") as FormControl;
    }
    get etapa(){
        return this.formFiltros.get("etapa") as FormControl;
    }
    get pais(){
        return this.formFiltros.get("pais") as FormControl;
    }
    get departamento(){
        return this.formFiltros.get("departamento") as FormControl;
    }
    get agruparPor(){
        return this.formFiltros.get("agruparPor") as FormControl;
    }
    get numeroResultados(){
        return this.formFiltros.get("numeroResultados") as FormControl;
    }




    seleccionarCampo($event: number) {
        this.tipoEmprendimiento.setValue($event);
    }

    borrarFiltros(){
        this.formFiltros.reset();
    }

        ngOnDestroy(): void {
        this.suscripcionEmprendimiento.unsubscribe();
    }
}
