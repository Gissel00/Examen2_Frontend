import { Routes } from '@angular/router';
import { LibroComponent } from './pages/libro.component';


export const routes: Routes = [
    {
        path: 'admin-libro',
        //canActivate : [PermisoCanActivateGuard],
        component: LibroComponent
    },

];