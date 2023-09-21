import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './usuario.routing';
import { DxDataGridModule, DxButtonModule, DxTextBoxModule, DxNumberBoxModule, DxCheckBoxModule } from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './pages/usuario.component';

@NgModule({
    declarations: [UsuarioComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
         
        DxDataGridModule,
        DxButtonModule,
        DxTextBoxModule,
        DxNumberBoxModule,
        DxCheckBoxModule
     ],
    exports: [],
    providers: [],
})
export class UsuarioModule {}