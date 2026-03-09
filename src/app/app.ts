import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { LogoEmpleatech } from "./components/logo-empleatech/logo-empleatech";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, LogoEmpleatech],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
