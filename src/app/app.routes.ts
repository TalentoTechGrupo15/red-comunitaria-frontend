import { Routes } from '@angular/router';

import { EquipoComponent} from './page/equipo.component/equipo.component';
import { Register } from './page/register/register';
import { Login } from './page/login/login';
import { Dashboard } from './page/dashboard/dashboard';

import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: "", component: Dashboard
    },
    {
        path:"equipo", component: EquipoComponent
    },
    {
        path:"registro", component: Register
    },
    {
        path:"iniciar-sesion", component: Login
    },
    {
        path: 'login', 
        component: LoginComponent
    }
];