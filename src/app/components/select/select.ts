import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [NgClass],
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {
  @Input() selected: string = "";
  @Input() options: string[] = []
  showOptions: boolean = true;
  @Output() onChangeValue = new EventEmitter<string>();


  constructor(private _eref: ElementRef) {}

  onShowOptions(){
    this.showOptions = !this.showOptions;
  }

  handleClick(newOption: string){
    this.selected = newOption;
    this.showOptions = false;
  }

    @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.showOptions = false;
    }
  }
}
