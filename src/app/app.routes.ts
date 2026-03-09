import { Routes } from '@angular/router';
import { EquipoComponent } from './components/equipo.component/equipo.component';
import { Register } from './page/register/register';

export const routes: Routes = [
    {
        path:"equipo", component: EquipoComponent
    },
    {
        path:"registro", component: Register
    }

];
