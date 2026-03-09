import { Routes } from '@angular/router';
import { EquipoComponent } from './page/equipo.component/equipo.component';
import { Register } from './page/register/register';
import { Login } from './page/login/login';

export const routes: Routes = [
    {
        path:"equipo", component: EquipoComponent
    },
    {
        path:"registro", component: Register
    },
    {
        path:"iniciar-sesion", component: Login
    }

];
