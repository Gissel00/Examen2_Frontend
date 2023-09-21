import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './libro.routing';
import { DxDataGridModule, DxButtonModule, DxTextBoxModule, DxNumberBoxModule, DxCheckBoxModule } from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { LibroComponent } from './pages/libro.component';

@NgModule({
    declarations: [LibroComponent],
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
export class LibroModule {}