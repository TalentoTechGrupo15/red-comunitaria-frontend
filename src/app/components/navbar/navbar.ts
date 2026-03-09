import { Component } from '@angular/core';
import { LogoEmpleatech } from "../logo-empleatech/logo-empleatech";
import { Boton } from "../boton/boton";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [LogoEmpleatech, Boton, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    constructor(private router: Router) {}

    goTo(page: string){
        this.router.navigate([page]);
    }
}
