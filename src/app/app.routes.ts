import { Routes } from '@angular/router';

import { EquipoComponent as EQ } from './page/equipo.component/equipo.component';
import { Register } from './page/register/register';
import { Login } from './page/login/login';
import { Dashboard } from './page/dashboard/dashboard';
import { EquipoComponent } from './components/equipo.component/equipo.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: "", component: Dashboard
    },
    {
        path:"equipo", component: EQ
    },
    {
        path:"registro", component: Register
    },
    {
        path:"iniciar-sesion", component: Login
    },
    {
        path: '', 
        redirectTo: '/login', 
        pathMatch: 'full' 
    },
    {
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'equipo', 
        component: EquipoComponent
    },
    {
        path: '**', 
        redirectTo: '/login'  

    }
];