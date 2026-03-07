import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Input } from '@angular/core';

interface Option {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-select',
  imports: [NgClass],
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {
  @Input() selected: number | null = null;
  @Input() options: Option[] = []
  @Output() onChangeValue = new EventEmitter<number>();
  showOptions: boolean = false;
  

  constructor(private _eref: ElementRef) {}

  onShowOptions(){
    this.showOptions = !this.showOptions;
  }

  handleClick(idOption: number){
    this.selected = idOption;
    this.showOptions = false;
    this.onChangeValue.emit(idOption);
  }

    @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.showOptions = false;
    }
  }
}
