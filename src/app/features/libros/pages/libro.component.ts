import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario, libro } from 'src/app/models';
import { LibroService, } from '../services/libro.service';

@Component({
    selector: 'st-libro',
    templateUrl: 'libro.component.html',
})

export class LibroComponent implements OnInit {
    libroForm: FormGroup | any;
    libros: Array<libro> =[];

    constructor(private libroService: LibroService) { 
        this.onResetForm();

        this.onMostrar = this.onMostrar.bind(this);
    }

    ngOnInit(): void { 
        this.getLibros();
    }

    onMostrar(event: any):void{
      
        const {data} = event.row;
        console.log(data);
        //this.onActualizar();
        this.libroForm.patchValue(data);
       
      }

    onResetForm(): void{
        this.libroForm = new FormGroup({
          lid: new FormControl(null),
          nombre: new FormControl(null),
          img: new FormControl(null),
          cantidad: new FormControl(0),
          usuario: new FormControl(null),
          sucursal: new FormControl(null),
        });
    
    }

    getLibros(): void{
        this.libroService.getlibros()
        .then(data=>{
          //console.log(data)
          this.libros=data;
          console.log(this.libros)
        })
        .catch(error => console.error(error))
        .finally(()=> console.log(''));
    }

    onAgregar(): void{

        this.libroService.agregarlibro(this.libroForm.value)
        .then(data =>{
          this.getLibros();
          this.onResetForm();
        })
        .catch(error => console.error(error));
    }
    
    onActualizar(): void{
      this.libroService.actualizarlibro(this.libroForm.value)
      .then(data =>{
        this.getLibros();
        this.onResetForm();
      })
      .catch(error =>console.error(error));
    }

    
      onDelete(): void{
        this.libroService.eliminarlibro(this.libroForm.value)
        .then(data =>{
          this.getLibros()
          this.onResetForm();
        })
        .catch(error => console.error(error));
      }
}
