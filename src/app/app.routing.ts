import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SideBarComponent } from './layout/sidebar/side.component';
import { PublicComponent } from './layout/public/public.component';
import { SucursalComponent } from './features/sucursales/pages/sucursal.component';

const routes: Routes = [

    {

        path: ' ',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {

        path: 'public',
        component:PublicComponent
    },
    {    
        path: 'home',
        component: SideBarComponent, 
       
        children:[
            {
                path:'usuarios',
               loadChildren:() => import('./features/usuarios/usuario.module').then(m=> m.UsuarioModule)
            },
            {
                path:'sucursales',
                loadChildren:() => import('./features/sucursales/sucursal.module').then(m=> m.SucusalModule)
                
            },
            {
                path:'libros',
                loadChildren:() => import('./features/libros/libro.module').then(m=> m.LibroModule)
            }, 
         
            
       ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }