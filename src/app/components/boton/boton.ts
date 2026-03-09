import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [NgClass],
  templateUrl: './boton.html',
  styleUrl: './boton.css',
})
export class Boton {
    @Input() text: String = "Hola";
    @Input() type: String = "button"
    @Input() styleButton: "primary" | "secondary" = "primary";
    @Output() onClick = new EventEmitter<void>();


    handleOnClick(){
        this.onClick.emit();
    }
}
