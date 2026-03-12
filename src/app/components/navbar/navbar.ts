import { Component, OnInit } from '@angular/core';
import { LogoEmpleatech } from "../logo-empleatech/logo-empleatech";
import { Boton } from "../boton/boton";
import { Router, RouterLink } from "@angular/router";
import { Observable } from 'rxjs';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { AsyncPipe } from '@angular/common';
import { UsuarioInfo } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  imports: [LogoEmpleatech, Boton, RouterLink, AsyncPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{
    isLogged$!: Observable<Boolean>;
    usuarioInfo$!: Observable<UsuarioInfo | null>;

    constructor(private router: Router, private usuarioService: UsuarioService) {}


    ngOnInit(): void {
        this.isLogged$ = this.usuarioService.isLogged$;
        this.usuarioInfo$ = this.usuarioService.usuarioInfo$;
    }
    goTo(page: string){
        this.router.navigate([page]);
    }

    logout(){
        this.usuarioService.logout();
    }
}
