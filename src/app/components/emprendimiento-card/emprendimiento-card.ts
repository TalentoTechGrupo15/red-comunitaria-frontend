import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-emprendimiento-card',
  imports: [],
  templateUrl: './emprendimiento-card.html',
  styleUrl: './emprendimiento-card.css',
})
export class EmprendimientoCard {

    @Input() nombre: String = "nombre";
    @Input() descripcion: String = "descripcion";
    @Input() year: String = "2019";
    @Input() inversion: Number = 0;
    @Input() etapa: String = "etapa";
    @Input() tipo: String = "tipo";
    @Input() equipo: String = "equipo";
    @Input() region: String = "region";
    @Input() pais: String = "pais";



}
