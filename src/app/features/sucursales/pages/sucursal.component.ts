import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Sucursal } from 'src/app/models';
import { SucursalService } from '../services';

@Component({
    selector: 'st-sucursal',
    templateUrl: 'sucursal.component.html',
})

export class SucursalComponent implements OnInit {
    sucursalForm: FormGroup | any;
    sucursales: Array<Sucursal> =[];

    constructor(private sucursalService: SucursalService) { 
        this.onResetForm();

        this.onMostrar = this.onMostrar.bind(this);
    }

    ngOnInit(): void { 
        this.getSucursales();
    }

    onMostrar(event: any):void{
      
        const {data} = event.row;
        console.log(data);
        //this.onActualizar();
        this.sucursalForm.patchValue(data);
       
      }

    onResetForm(): void{
        this.sucursalForm = new FormGroup({
          _id: new FormControl(null),
          nombre: new FormControl(null),
          img: new FormControl(null),
          usuario: new FormControl(null),
        });
    
    }

    getSucursales(): void{
        this.sucursalService.getSucursales()
        .then(data=>{
          //console.log(data)
          this.sucursales=data;
          console.log(this.sucursales)
        })
        .catch(error => console.error(error))
        .finally(()=> console.log(''));
    }

    onAgregar(): void{

        this.sucursalService.agregarSucursal(this.sucursalForm.value)
        .then(data =>{
          this.getSucursales();
          this.onResetForm();
        })
        .catch(error => console.error(error));
    }
    
    onActualizar(): void{
      this.sucursalService.actualizarSucursal(this.sucursalForm.value)
      .then(data =>{
        this.getSucursales();
        this.onResetForm();
      })
      .catch(error =>console.error(error));
    }

    
      onDelete(): void{
        this.sucursalService.eliminarSucursal(this.sucursalForm.value)
        .then(data =>{
          this.getSucursales()
          this.onResetForm();
        })
        .catch(error => console.error(error));
      }
}
