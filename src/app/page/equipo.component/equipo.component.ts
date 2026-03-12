import { Component, inject, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo/equipo.service';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomInput } from '../../components/custom-input/custom-input';
import { Equipo } from '../../models/equipo';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-equipo-component',
    imports: [FormsModule, ReactiveFormsModule, CustomInput],
    templateUrl: './equipo.component.html',
    styleUrl: './equipo.component.css',
})
export class EquipoComponent implements OnInit {

    mensaje: string | null = null;

    private equipoService = inject(EquipoService);
    private router = inject(Router);
    private cdr = inject(ChangeDetectorRef);


    private equipo$!: Observable<any>;
    


    newEquipo = new FormGroup({
        nombre: new FormControl("", [Validators.required]),
        descripcion: new FormControl("", [Validators.required]),
        integrantes: new FormArray([]),
    });



    get integrantes() {
        return this.newEquipo.get("integrantes") as FormArray;
    }

    get nombre() {
        return this.newEquipo.get("nombre") as FormControl;
    }

    get descripcion() {
        return this.newEquipo.get("descripcion") as FormControl;
    }


    // obtenerEquipo() {
    //     this.equipo$ = this.equipoService.obtenerEquipo(5);
    // }

    ngOnInit() {
        // Agrega un integrante por defecto
        //this.integrantes.push(new FormControl("usuarioPorDefecto"));
        // this.equipo$ = this.equipoService.obtenerEquipo(6);
    }

    agregarIntegrante() {
        this.integrantes.push(new FormControl("", Validators.required));
    }

    eliminarIntegrante(index: number) {
        this.integrantes.removeAt(index);
    }

    crearEquipo() {
        this.mensaje = null;
        if (this.newEquipo.valid && this.integrantes.length > 0) {
            const equipo = this.newEquipo.value as Equipo;
            this.equipoService.crearEquipo(equipo).subscribe({
                next: (res) => {
                    if (res && res.idEquipo)  {
                        this.router.navigate(["/"]);
                    }
                },
                error: (err) => {
                    if (err && typeof err.error === 'string') {
                        this.mensaje = err.error;
                    } else {
                        this.mensaje = 'Error al crear equipo.';
                    }
                    this.cdr.detectChanges();
                    console.error('Error al crear equipo:', err);
                }
            });
        } else {
            this.newEquipo.markAllAsTouched();
        }
    }
}
