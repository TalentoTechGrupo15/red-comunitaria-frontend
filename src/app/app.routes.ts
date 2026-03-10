import { Routes } from '@angular/router';
import { EquipoComponent } from './components/equipo.component/equipo.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
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