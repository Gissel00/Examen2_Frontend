import { Routes } from '@angular/router';
import { UsuarioComponent } from './pages/usuario.component';


export const routes: Routes = [
    {
        path: 'admin-usuario',
        //canActivate : [PermisoCanActivateGuard],
        component: UsuarioComponent
    },

];