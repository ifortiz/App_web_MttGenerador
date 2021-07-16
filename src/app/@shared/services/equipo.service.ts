import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from '../modals/Equipo';
import { IEquipo } from '../interfaces/Interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) { }

  private urlEndpoint = environment.urlEndpoint + 'equipo/';

  getEquipo(id: number): Observable<Equipo> {
    return this.http.get<Equipo>(this.urlEndpoint + 'equipo/' + id);
  }


  getEquipos(): Observable<Equipo[]>{     // ese any debe ser una interfaz con los mismos campos que retorna tu servicio
    return this.http.get<Equipo[]>(this.urlEndpoint + 'listar');
  }

  createEquipo(equipo:Equipo): Observable<IEquipo> {
    return this.http.post<IEquipo>(this.urlEndpoint + 'equipo', equipo);
    
  }
  
 updateEquipo(id:number,equipo:Equipo): Observable<IEquipo> {
    return this.http.put<IEquipo>(this.urlEndpoint + 'equipo/' + id, equipo);
  }

  deleteEquipo(id:number): Observable<IEquipo> {
    return this.http.delete<IEquipo>(this.urlEndpoint + 'equipo/' + id);
}
}
