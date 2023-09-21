import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Sucursal } from 'src/app/models';
import { environment } from 'src/environments/environment';

const {webApi} = environment;
@Injectable({
    providedIn: 'root'
})

export class SucursalService {

    constructor(private httpClient: HttpClient) {
        
    }

    getSucursales(): Promise<Array<Sucursal>>{
        const promise = lastValueFrom(this.httpClient.get<Array<Sucursal>>(`${webApi.sistemaTransporte}/api/sucursales`));
        return promise;
    }

    agregarSucursal(sucursal: Sucursal): Promise<{ mensaje: string }> {

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('content-type', 'application/json')
  
        return lastValueFrom(this.httpClient.post<{ mensaje: string }>(`${webApi.sistemaTransporte}/api/sucursales`,
            JSON.stringify(sucursal), { headers: headers }));
    }
  
    
    actualizarSucursal(sucursal: Sucursal): Promise<{ mensaje: string }> {

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('content-type', 'application/json')
  
        return lastValueFrom(this.httpClient.put<{ mensaje: string }>(`${webApi.sistemaTransporte}/api/sucursales/actualizarSucursal/${sucursal.sid}`,
            JSON.stringify(sucursal), { headers: headers }));
    }
  

    eliminarSucursal(sucursal: Sucursal): Promise<{ mensaje: string }> {
  
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('content-type', 'application/json')
  
        return lastValueFrom(this.httpClient.patch<{ mensaje: string }>(`${webApi.sistemaTransporte}/api/sucursales/borrarSucursal/${sucursal.sid}`,
            JSON.stringify(sucursal), { headers: headers }));
    }
}