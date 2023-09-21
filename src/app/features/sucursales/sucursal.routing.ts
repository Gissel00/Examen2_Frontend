import { Routes } from '@angular/router';
import { SucursalComponent } from './pages/sucursal.component';

export const routes: Routes = [
    {
        path: 'admin-sucursal',
        //canActivate : [PermisoCanActivateGuard],
        component: SucursalComponent
    },

];