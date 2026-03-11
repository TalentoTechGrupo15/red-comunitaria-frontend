import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInput } from '../../components/custom-input/custom-input';
import { Select } from '../../components/select/select';
import { Observable } from 'rxjs';
import { EquipoService } from '../../services/equipo/equipo.service';
import { AsyncPipe } from '@angular/common';
import { EmprendimientoService } from '../../services/emprendimiento/emprendimiento.service';
import { UsuarioInfo } from '../../models/user.model';
import { UsuarioService } from '../../services/usuario/usuario.service';

import { Router } from '@angular/router';
import { Equipo } from '../../models/equipo';
@Component({
  selector: 'app-emprendimiento',
  imports: [FormsModule, ReactiveFormsModule, CustomInput, Select, AsyncPipe],
  templateUrl: './emprendimiento.html',
  styleUrl: './emprendimiento.css',
})
export class Emprendimiento implements OnInit {
  private equipoService = inject(EquipoService);
  private emprendimientoService = inject(EmprendimientoService);
  private usuarioService = inject(UsuarioService);
  private router = inject(Router);

  etapas$!: Observable<any[]>;
  regiones$!: Observable<any[]>;
  tipos$!: Observable<any[]>;
  equipos$!: Observable<any[]>;

  UserInfo$!: Observable<UsuarioInfo | null>;
  equipo$!: Observable<Equipo>;



  formEmprendimiento = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    inversion: new FormControl<number | null>(null, [Validators.required]),
    idEtapa: new FormControl<number | null>(null, [Validators.required]),
    idRegion: new FormControl<number | null>(null, [Validators.required]),
    idTipoEmprendimiento: new FormControl<number | null>(null, [Validators.required]),
    idEquipo: new FormControl<number | null>(null),
  });



  ngOnInit() {

    if(this.usuarioService.tieneEmprendimiento() || !this.usuarioService.tieneEquipo()){
        this.router.navigate(["/"]);
    }
    this.etapas$ = this.equipoService.obtenerEtapas();
    this.regiones$ = this.equipoService.obtenerDepartamentos();
    this.tipos$ = this.equipoService.obtenerTiposDeEmprendimiento();
    const idEquipo = this.usuarioService.obtenerIdEquipo();
    
    if(idEquipo){
        this.equipo$ = this.equipoService.obtenerEquipoPorId(idEquipo);
        console.log("Equipo: ", this.equipo$)
    }

  }

  get nombre() { 
    return this.formEmprendimiento.get('nombre') as FormControl; 
}
  get descripcion() { 
    return this.formEmprendimiento.get('descripcion') as FormControl; 
}
  get year() { 
    return this.formEmprendimiento.get('year') as FormControl; 
}
  get inversion() { 
    return this.formEmprendimiento.get('inversion') as FormControl; 
}
  get idEtapa() { 
    return this.formEmprendimiento.get('idEtapa') as FormControl; 
}
  get idRegion() { 
    return this.formEmprendimiento.get('idRegion') as FormControl; 
}
  get idTipoEmprendimiento() { 
    return this.formEmprendimiento.get('idTipoEmprendimiento') as FormControl; 
}
  get idEquipo() { 
    return this.formEmprendimiento.get('idEquipo') as FormControl; 
}


  crearEmprendimiento() {
    if (this.formEmprendimiento.valid) {

        const emprendimiento = this.formEmprendimiento.value;
        emprendimiento.idEquipo = this.usuarioService.obtenerIdEquipo();
        

        this.emprendimientoService.crearEmprendimiento(emprendimiento).subscribe({
                next: (res) => console.log('Emprendimiento creado:', res),
                error: (err) => console.error('Error al crear emprendimiento:', err),
            });

      console.log(this.formEmprendimiento.value);
    } else {
      this.formEmprendimiento.markAllAsTouched();
    }
  }
}
