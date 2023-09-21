import { Component, OnInit } from "@angular/core";
@Component({
    selector:'sidebar',
    templateUrl:'./sidebar.component.html'
})

export class SideBarComponent implements OnInit{

    currentDate = Date.now();
    constructor() { }

    ngOnInit(): void { }

    
}



