import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SucursalComponent } from './pages/sucursal.component';
import { routes } from './sucursal.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxTextBoxModule, DxNumberBoxModule, DxCheckBoxModule, DxDataGridModule } from 'devextreme-angular';

@NgModule({
    declarations: [SucursalComponent],
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
export class SucusalModule {}