import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginCredentials, Usuario, UsuarioInfo } from '../../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {

    private http = inject(HttpClient);

    private usuarioInfo = new BehaviorSubject<UsuarioInfo | null>(null);
    private isLogged = new BehaviorSubject<boolean>(false);

    private crearUsuarioURL = "http://localhost:8080/usuario/registro";
    private logginUrl = "";



    get isLogged$(): Observable<boolean>{
        return this.isLogged.asObservable();
    }

    get usuarioInfo$(): Observable<UsuarioInfo | null>{
        return this.usuarioInfo.asObservable();
    }



    registrarse(user: Usuario) {
        return this.http.post(this.crearUsuarioURL, user);
    }



    login(credentials: LoginCredentials) {
         this.http.post<UsuarioInfo>(this.logginUrl, credentials).subscribe({
            next:(res) => {
                this.usuarioInfo.next(res);
                this.isLogged.next(true);
            }
        })
    }

    private handleLoginSuccess(response: any): void {
        this.usuarioInfo.next(response.usuario);
        this.isLogged.next(true);
        localStorage.setItem("token", response.token);
    }



}
