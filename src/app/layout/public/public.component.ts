import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './public.component.html',
    styleUrls: ['public.components.scss']
})
export class PublicComponent implements OnInit {
    //constructor(private fsAuthService: FsAuthService ) { }

    ngOnInit(): void { }

    onIniciarSesion(){
   //     this.fsAuthService.signInAsync();
    }

    onCerrarSesion(){
        //this.fsAuthService.signOutAsync();
    }
}
