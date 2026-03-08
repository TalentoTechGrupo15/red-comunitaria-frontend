import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-custom-input',
    imports: [FormsModule, ReactiveFormsModule, NgClass],
    templateUrl: './custom-input.html',
    styleUrl: './custom-input.css',
})
export class CustomInput {

    @Input() id: string = '';
    @Input() name: string = '';

    @Input() label: string = "";
    @Input() placeholder: string = "";
    @Input() control!: FormControl ;
    @Input() type: "text" | "number" = "text";

    get valor(){
        return this.control.value;
    }
}
