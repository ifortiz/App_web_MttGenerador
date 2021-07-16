import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicion } from '../modals/Medicion';
import { IMedicion } from '../interfaces/Interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicionService {

  constructor(private http: HttpClient) { }

  private urlEndpoint = environment.urlEndpoint + 'equipoprueba/';

  getMedicion(id: number): Observable<Medicion> {
    return this.http.get<Medicion>(this.urlEndpoint + 'equipoprueba/' + id);
  }


  getMediciones(): Observable<Medicion[]>{     // ese any debe ser una interfaz con los mismos campos que retorna tu servicio
    return this.http.get<Medicion[]>(this.urlEndpoint + 'listar');
  }

  createMedicion(Medicion:Medicion): Observable<IMedicion> {
    return this.http.post<IMedicion>(this.urlEndpoint + 'equipoprueba', Medicion);
    
  }
  
 updateMedicion(id:number,Medicion:Medicion): Observable<IMedicion> {
    return this.http.put<IMedicion>(this.urlEndpoint + 'equipoprueba/' + id, Medicion);
  }

  deleteMedicion(id:number): Observable<IMedicion> {
    return this.http.delete<IMedicion>(this.urlEndpoint + 'equipoprueba/' + id);
}
}
