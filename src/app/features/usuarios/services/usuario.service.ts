import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Usuario } from 'src/app/models';
import { environment } from 'src/environments/environment';

const {webApi} = environment;

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private httpClient: HttpClient) {
        
    }

    getTusuario(): Promise<Array<Usuario>>{
        const promise = lastValueFrom(this.httpClient.get<Array<Usuario>>(`${webApi.sistemaTransporte}/api/usuarios`));
        return promise;
    }

    agregarusuario(usuario: Usuario): Promise<{ mensaje: string }> {

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('content-type', 'application/json')
  
        return lastValueFrom(this.httpClient.post<{ mensaje: string }>(`${webApi.sistemaTransporte}/api/usuarios`,
            JSON.stringify(usuario), { headers: headers }));
    }

    actualizarusuario(usuario: Usuario): Promise<{ mensaje: string }> {

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('content-type', 'application/json')
  
        return lastValueFrom(this.httpClient.put<{ mensaje: string }>(`${webApi.sistemaTransporte}/api/usuarios/${usuario.uid}`,
            JSON.stringify(usuario), { headers: headers }));
    }
  
    eliminarusuario(usuario: Usuario): Promise<{ mensaje: string }> {
  
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('content-type', 'application/json')
  
        return lastValueFrom(this.httpClient.patch<{ mensaje: string }>(`${webApi.sistemaTransporte}/api/usuarios/${usuario.uid}`,
            JSON.stringify(usuario), { headers: headers }));
    }
}