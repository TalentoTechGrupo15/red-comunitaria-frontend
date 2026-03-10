import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-empleatech',
  imports: [],
  templateUrl: './logo-empleatech.html',
  styleUrl: './logo-empleatech.css',
})
export class LogoEmpleatech {
    @Input() sizeTitleText: number = 40;
    @Input() sizeSubtitleText: number = 16;
    @Input() subtitle: string = "";

}
