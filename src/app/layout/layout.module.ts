import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';
import { SideBarComponent } from './sidebar/side.component';
import { PublicComponent } from './public/public.component';

@NgModule({
    declarations: [SideBarComponent,PublicComponent],
    imports: [ 
        CommonModule,     
        RouterModule,
        DxButtonModule
    ],
    exports: [SideBarComponent,PublicComponent],
    providers: [],
})
export class LayoutModule {}