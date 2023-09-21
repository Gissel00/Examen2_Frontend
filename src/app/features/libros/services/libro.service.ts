import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import {  libro } from 'src/app/models';
import { environment } from 'src/environments/environment';

const {webApi} = environment;

@Injectable({
    providedIn: 'root'
})
export class LibroService {

    constructor(private httpClient: HttpClient) {
        
    }

    getlibros(): Promise<Array<libro>>{
        const promise = lastValueFrom(this.httpClient.get<Array<libro>>(`${webApi.sistemaTransporte}/api/libros`));
        return promise;
    }

    agregarlibro(libro: libro): Promise<{ mensaje: string }> {

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('content-type', 'application/json')
  
        return lastValueFrom(this.httpClient.post<{ mensaje: string }>(`${webApi.sistemaTransporte}/api/libros`,
            JSON.stringify(libro), { headers: headers }));
    }

    actualizarlibro(libro: libro): Promise<{ mensaje: string }> {

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('content-type', 'application/json')
  
        return lastValueFrom(this.httpClient.put<{ mensaje: string }>(`${webApi.sistemaTransporte}/api/libros/${libro.lid}`,
            JSON.stringify(libro), { headers: headers }));
    }
  
    eliminarlibro(libro: libro): Promise<{ mensaje: string }> {
  
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('content-type', 'application/json')
  
        return lastValueFrom(this.httpClient.patch<{ mensaje: string }>(`${webApi.sistemaTransporte}/api/libros/${libro.lid}`,
            JSON.stringify(libro), { headers: headers }));
    }
}