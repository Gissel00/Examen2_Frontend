import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models';
import { UsuarioService } from '../services/usuario.service';

@Component({
    selector: 'st-usuario',
    templateUrl: 'usuario.component.html',
})

export class UsuarioComponent implements OnInit {
    usuarioForm: FormGroup | any;
    usuarios: Array<Usuario> =[];

    constructor(private usuarioService: UsuarioService) { 
        this.onResetForm();

        this.onMostrar = this.onMostrar.bind(this);
    }

    ngOnInit(): void { 
        this.getUsuarios();
    }

    onMostrar(event: any):void{
      
        const {data} = event.row;
        console.log(data);
        //this.onActualizar();
        this.usuarioForm.patchValue(data);
       
      }

    onResetForm(): void{
        this.usuarioForm = new FormGroup({
          uid: new FormControl(null),
          nombre: new FormControl(null),
          email: new FormControl(null),
          password: new FormControl(null),
          img: new FormControl(null),
          role: new FormControl(null),
          google: new FormControl(true),
        });
    
    }

    getUsuarios(): void{
        this.usuarioService.getTusuario()
        .then(data=>{
          //console.log(data)
          this.usuarios=data;
          console.log(this.usuarios)
        })
        .catch(error => console.error(error))
        .finally(()=> console.log(''));
    }

    onAgregar(): void{

        this.usuarioService.agregarusuario(this.usuarioForm.value)
        .then(data =>{
          this.getUsuarios();
          this.onResetForm();
        })
        .catch(error => console.error(error));
    }
    
    onActualizar(): void{
      this.usuarioService.actualizarusuario(this.usuarioForm.value)
      .then(data =>{
        this.getUsuarios();
        this.onResetForm();
      })
      .catch(error =>console.error(error));
    }

    
      onDelete(): void{
        this.usuarioService.eliminarusuario(this.usuarioForm.value)
        .then(data =>{
          this.getUsuarios()
          this.onResetForm();
        })
        .catch(error => console.error(error));
      }
}
