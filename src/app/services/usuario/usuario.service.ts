import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginCredentials, Usuario, UsuarioInfo } from '../../models/user.model';
import { SERVICES } from '../../constants/services.constants';

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {

    private http = inject(HttpClient);

    private usuarioInfo = new BehaviorSubject<UsuarioInfo | null>(null);
    private isLogged = new BehaviorSubject<boolean>(false);



    constructor(){
        this.inicializarSesion();
    }



    private inicializarSesion(): void {
        const accountInfo = localStorage.getItem(SERVICES.LOCALSTORAGE_NOMBRE_INFORMACION_USUARIO);

        if (accountInfo) {
            this.usuarioInfo.next(JSON.parse(accountInfo));  
            this.isLogged.next(true);

        }else{
            this.logout();
        }
    }

    

    get isLogged$(): Observable<boolean>{
        return this.isLogged.asObservable();
    }

    get usuarioInfo$(): Observable<UsuarioInfo | null>{
        return this.usuarioInfo.asObservable();
    }

    tieneEquipo(): boolean{
        if(this.usuarioInfo.value && this.usuarioInfo.value?.idEquipo){
            return true;
        }
        return false;
    }

    tieneEmprendimiento(): boolean{
        if(this.usuarioInfo.value && this.usuarioInfo.value.idEmprendimiento){
            return true;
        }
        return false;
    }

    obtenerIdEquipo(): number | null {
        return this.usuarioInfo.value?.idEquipo ?? null;
    }

    obtenerIdEmprendimiento(): number | null {
        return this.usuarioInfo.value?.idEmprendimiento ?? null;
    }


    registrarse(user: Usuario) {
        return this.http.post<UsuarioInfo>(SERVICES.URL_CREAR_USUARIO, user).subscribe({
            next:(res)=>{
                console.log("Respuesta al resgistrarse", res);
                
                this.usuarioInfo.next(res);
                if(res.usuario !== "" && res.usuario !== null && res.token !== "" && res.token !== null){
                    
                    localStorage.setItem(SERVICES.LOCALSTORAGE_NOMBRE_INFORMACION_USUARIO, JSON.stringify(res));
                    this.isLogged.next(true);
                }
            },
            error:(error)=>{
                console.error("Error al registrarse: ", error);
            }
        });
    }

    
    
    
    login(credentials: LoginCredentials) {
        return this.http.post<UsuarioInfo>(SERVICES.URL_INICIAR_SESION, credentials).pipe(tap((res)=>{
        
                console.log("Respuesta al iniciar sesion", res);
                this.isLogged.next(false);
                
                this.usuarioInfo.next(res);
                if(res.usuario !== "" && res.usuario !== null && res.token !== "" && res.token !== null){
                    
                    localStorage.setItem(SERVICES.LOCALSTORAGE_NOMBRE_INFORMACION_USUARIO, JSON.stringify(res));
                    this.isLogged.next(true);
                }     

        }))
    }
    
    
    logout(): void{
        this.usuarioInfo.next(null);
        this.isLogged.next(false);
        localStorage.removeItem(SERVICES.LOCALSTORAGE_NOMBRE_INFORMACION_USUARIO);
        localStorage.removeItem(SERVICES.LOCALSTORAGE_NOMBRE_TOKEN);
    }

}
