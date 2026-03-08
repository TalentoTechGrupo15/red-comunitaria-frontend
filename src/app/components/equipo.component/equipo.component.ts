import { Component, inject, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo/equipo.service';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomInput } from '../custom-input/custom-input';

@Component({
  selector: 'app-equipo-component',
  imports: [FormsModule, ReactiveFormsModule, CustomInput],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css',
})
export class EquipoComponent implements OnInit {
  private equipoService = inject(EquipoService);
  private equipo$!: Observable<any>;

  newEquipo = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    integrantes: new FormArray([]),
  });

  get integrantes() {
    return this.newEquipo.get("integrantes") as FormArray;
  }

  get nombre(){
    return this.newEquipo.get("nombre") as FormControl;
  }

  get descripcion(){
    return this.newEquipo.get("descripcion") as FormControl;
  }


  obtenerEquipo() {
    this.equipo$ = this.equipoService.obtenerEquipo(5);
  }

  ngOnInit() {
    // Agregar un integrante por defecto
    this.integrantes.push(new FormControl("usuarioPorDefecto"));
    this.equipo$ = this.equipoService.obtenerEquipo(6);
  }

  agregarIntegrante() {
    this.integrantes.push(new FormControl("", Validators.required));
  }

  eliminarIntegrante(index: number) {
    this.integrantes.removeAt(index);
  }

  crearEquipo() {
    if (this.newEquipo.valid) {
      // Lógica para crear el equipo
    } else {
      // Mostrar errores
    }
  }
}
